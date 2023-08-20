import loadable from '@loadable/component';
import { Link, navigate } from 'gatsby-link';
import { useEffect, useState } from 'react';
import { GraphData, LinkObject, NodeObject } from 'react-force-graph-3d';
import { useResizeDetector } from 'react-resize-detector';
import { css, styled } from 'styled-components';

import ScrollToTop from '../components/ScrollToTop';
import useSlugs from '../hooks/useSlugs';
import { useContext } from '../store/context';
import { device } from '../styles/breakpoints';
import { border, flex, font_sora } from '../styles/mixins';

const ForceGraph3D = loadable(() => import('react-force-graph-3d'));

const Wikis = () => {
  const { slugs } = useSlugs();

  const { displayMode } = useContext();

  const [graphData, setGraphData] = useState<GraphData<NodeObject, LinkObject>>();
  const [toggleOn, setToggleOn] = useState(true);

  const handleClickNode = (node: NodeObject) => {
    if (node.id === 'root') {
      return;
    }
    navigate(`/${node.id}`);
  };

  const { width, ref } = useResizeDetector({
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
              val: 100 - depth * 40,
              color:
                displayMode === 'day'
                  ? `rgba(5, 0, 232,${1 - (depth + 1) / 10})`
                  : `rgba(248, 234, 24,${1 - (depth + 1) / 10})`
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
        {
          nodes: [
            {
              id: 'root',
              name: 'root',
              val: 300,
              color: displayMode === 'day' ? 'rgb(5, 0, 232)' : 'rgb(248, 234, 24)'
            }
          ],
          links: []
        }
      );
    };

    setGraphData(setNodeLinks(slugs));
  }, [slugs, displayMode]);

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
        <>
          <span>
            Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan, Node-click: see
            the wiki
          </span>
          <ForceGraph3D
            width={width}
            height={460}
            graphData={graphData}
            onNodeClick={handleClickNode}
            backgroundColor={displayMode === 'day' ? '#fff' : '#000000'}
            linkWidth={0.3}
            linkOpacity={0.4}
            nodeOpacity={0.8}
            nodeResolution={100}
            nodeRelSize={2}
            showNavInfo={false}
          />
        </>
      ) : (
        <>
          <span>click to see the wiki</span>
          <ul>
            {[...slugs].sort().map((slug) => {
              const segments = slug.split('/');
              const title = segments[segments.length - 1].replaceAll('_', ' ');

              return (
                <List key={title} depth={segments.length - 1}>
                  <Link to={'/' + slug}>{title}</Link>
                </List>
              );
            })}
          </ul>
        </>
      )}
      <ScrollToTop />
    </Container>
  );
};

export default Wikis;

const Container = styled.div`
  @media ${device.widerThanTablet} {
    max-width: 780px;
  }

  width: 100%;
  height: 100%;
  overflow: hidden;

  .scene-tooltip {
    color: ${({ theme }) => theme.default};
    font-size: 18px !important;
    font-weight: 500;
    text-decoration: underline;
  }

  & > span {
    ${font_sora()};
    display: block;
    text-align: end;
    color: ${({ theme }) => theme.mute};
    font-size: 14px;
    line-height: 24px;
  }
`;

const Title = styled.div<{ toggle: boolean }>`
  ${flex({ justifyContent: 'flex-end' })};
  ${font_sora()};
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
  padding-left: ${({ depth }) => `${depth * 32}px`};
  font-size: ${({ depth }) => `${20 - depth * 2}px`};
  line-height: 2rem;

  &::before {
    ${({ depth }) =>
      depth > 0
        ? css`
            content: '- ';
          `
        : css`
            content: '';
          `};
  }

  & > a {
    text-decoration: none;
    padding: 6px;
    border-radius: 4px;

    &:hover {
      color: ${({ theme }) => theme.index};
      background-color: ${({ theme }) => theme.indexBg};
    }
  }
`;
