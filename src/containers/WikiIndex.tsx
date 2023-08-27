import loadable from '@loadable/component';
import { Link, navigate } from 'gatsby-link';
import { useState } from 'react';
import { NodeObject } from 'react-force-graph-3d';
import { useResizeDetector } from 'react-resize-detector';
import { styled } from 'styled-components';

import ScrollToTop from '../components/ScrollToTop';
import useGraphData from '../hooks/useGraphData';
import useSlugs from '../hooks/useSlugs';
import { useContext } from '../store/context';
import { device } from '../styles/breakpoints';
import { border, flex, font_sora } from '../styles/mixins';

const ForceGraph3D = loadable(() => import('react-force-graph-3d'));

const WikiIndex = () => {
  const { displayMode } = useContext();

  const { slugs } = useSlugs();
  const { graphData } = useGraphData({ displayMode, slugs });
  const { width, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 100
  });

  const [toggleOn, setToggleOn] = useState(true);

  if (!graphData) {
    return null;
  }

  const handleClickNode = (node: NodeObject) => {
    if (node.id === 'root') {
      return;
    }
    navigate(`/${node.id}`);
  };

  return (
    <Container ref={ref}>
      <Title $toggle={toggleOn}>
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
            {[...slugs]
              .sort(({ path: a }, { path: b }) => (a > b ? 1 : -1))
              .map(({ path, title }) => {
                return (
                  <List key={title} $depth={path.split('/').length - 1}>
                    <Link to={'/' + path}>{title}</Link>
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

export default WikiIndex;

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

const Title = styled.div<{ $toggle: boolean }>`
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
      color: ${({ $toggle, theme }) => ($toggle ? theme.default : theme.mute)};
      border-color: ${({ $toggle, theme }) => ($toggle ? theme.default : theme.border)};

      &:hover {
        color: ${({ $toggle, theme }) => ($toggle ? theme.default : theme.link)};
      }
    }

    &:last-of-type {
      color: ${({ $toggle, theme }) => ($toggle ? theme.mute : theme.default)};
      border-color: ${({ $toggle, theme }) => ($toggle ? theme.border : theme.default)};

      &:hover {
        color: ${({ $toggle, theme }) => ($toggle ? theme.link : theme.default)};
      }
    }
  }
`;

const List = styled.li<{ $depth: number }>`
  padding-left: ${({ $depth }) => `${$depth * 12}px`};
  margin-bottom: 4px;

  & > a {
    ${font_sora()};
    text-underline-position: under;

    &:hover {
      color: ${({ theme }) => theme.link};
    }
  }
`;
