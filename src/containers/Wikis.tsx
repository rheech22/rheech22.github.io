import loadable from '@loadable/component';
import { Link, navigate } from 'gatsby-link';
import { useEffect, useState } from 'react';
import { GraphData, LinkObject, NodeObject } from 'react-force-graph-3d';
import { useResizeDetector } from 'react-resize-detector';
import { styled } from 'styled-components';

import ScrollToTop from '../components/ScrollToTop';
import useSlugs from '../hooks/useSlugs';
import { device } from '../styles/breakpoints';
import { border, flex, font_sora } from '../styles/mixins';

const ForceGraph3D = loadable(() => import('react-force-graph-3d'));

const colorMap = new Map([
  [0, '#BF616A'],
  [1, '#D08770'],
  [2, '#EBCB8B'],
  [3, '#A3BE8C'],
  [4, '#B48EAD']
]);

const Wikis = () => {
  const { slugs } = useSlugs();

  const [graphData, setGraphData] = useState<GraphData<NodeObject, LinkObject>>();
  const [toggleOn, setToggleOn] = useState(true);

  const handleClickNode = (node: NodeObject) => {
    if (node.id === 'root') {
      return;
    }
    navigate(`/${node.id}`);
  };

  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 100
  });

  useEffect(() => {
    const setNodeLinks = (paths: string[]) => {
      return paths.reduce<GraphData<NodeObject, LinkObject>>(
        (acc, path) => {
          const segments = path.split('/');
          const depth = segments.length - 1;
          const title = segments[segments.length - 1].replaceAll('_', ' ');

          acc.nodes = [
            ...acc.nodes,
            {
              id: path,
              name: title,
              val: 100 - depth * 10,
              color: colorMap.get(depth) ?? Math.floor(Math.random() * 16777215).toString(16)
            }
          ];

          acc.links = [
            ...acc.links,
            {
              source: depth ? [...segments].slice(0, -1).join('/') : 'root',
              target: path
            }
          ];

          return acc;
        },
        { nodes: [{ id: 'root', name: 'root', val: 300, color: '#B31312' }], links: [] }
      );
    };

    setGraphData(setNodeLinks(slugs));
  }, [slugs]);

  if (!graphData) {
    return null;
  }

  return (
    <Container ref={ref}>
      <Title toggle={toggleOn}>
        <span onClick={() => setToggleOn(true)}>GRAPH</span>
        <span onClick={() => setToggleOn(false)}>LIST</span>
      </Title>
      {toggleOn ? (
        <ForceGraph3D
          width={width}
          height={height}
          graphData={graphData}
          onNodeClick={handleClickNode}
          backgroundColor="#3B4252"
          linkWidth={1}
          linkOpacity={0.4}
          nodeOpacity={0.8}
          nodeResolution={100}
          nodeRelSize={2}
        />
      ) : (
        <ul>
          {[...slugs].sort().map((slug) => {
            const segments = slug.split('/');
            const title = segments[segments.length - 1].replaceAll('_', ' ');

            return (
              <List key={title} depth={segments.length - 1}>
                <Link to={slug}>{title}</Link>
              </List>
            );
          })}
        </ul>
      )}
      <ScrollToTop />
    </Container>
  );
};

export default Wikis;

const Container = styled.div`
  @media ${device.widerThanTablet} {
    max-width: 780px;
    margin-right: auto;
  }

  width: 100%;
  height: 100%;
  overflow: hidden;

  .scene-tooltip {
    font-size: 18px !important;
  }
`;

const Title = styled.div<{ toggle: boolean }>`
  ${flex({ justifyContent: 'flex-end' })};
  ${font_sora()};
  margin-bottom: 48px;
  font-weight: 600;
  font-size: 32px;
  width: 100%;
  ${border.bottom};

  span + span {
    margin-left: 40px;
  }

  & > span {
    cursor: pointer;
    height: 100%;
    transform: translateY(1px);
    ${border.bottom};

    &:first-of-type {
      color: ${({ toggle, theme }) => (toggle ? theme.default : theme.mute)};
      border-color: ${({ toggle, theme }) => (toggle ? theme.default : theme.border)};

      &:hover {
        color: ${({ toggle, theme }) => (toggle ? theme.default : theme.link)};
      }
    }

    &:last-of-type {
      color: ${({ toggle, theme }) => (toggle ? theme.mute : theme.default)};
      border-color: ${({ toggle, theme }) => (toggle ? theme.border : theme.default)};

      &:hover {
        color: ${({ toggle, theme }) => (toggle ? theme.link : theme.default)};
      }
    }
  }
`;

const List = styled.li<{ depth: number }>`
  padding-left: ${({ depth }) => `${depth * 30}px`};
  margin-bottom: 10px;
  font-size: ${({ depth }) => `${24 - depth * 4}px`};

  & > a {
    text-underline-position: under;

    &:hover {
      color: ${({ theme }) => theme.link};
    }
  }
`;
