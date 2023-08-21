import { useEffect, useState } from 'react';
import { GraphData, LinkObject, NodeObject } from 'react-force-graph-3d';

import { State } from '../store/types';

const rootNode = (displayMode: State['displayMode']) => ({
  id: 'root',
  name: 'root',
  val: 300,
  color: displayMode === 'day' ? 'rgb(5, 0, 232)' : 'rgb(248, 234, 24)'
});

const useGraphData = ({
  displayMode,
  slugs
}: {
  displayMode: State['displayMode'];
  slugs: string[];
}) => {
  const [graphData, setGraphData] = useState<GraphData<NodeObject, LinkObject>>();

  useEffect(() => {
    const setNodeLinks = (paths: string[]) => {
      return paths.reduce<GraphData<NodeObject, LinkObject>>(
        (acc, path) => {
          const segments = path.split('/');
          const depth = segments.length - 1;
          const title = segments[depth].replaceAll('_', ' ');

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
          nodes: [rootNode(displayMode)],
          links: []
        }
      );
    };

    setGraphData(setNodeLinks(slugs));
  }, [slugs, displayMode]);

  return { graphData };
};

export default useGraphData;
