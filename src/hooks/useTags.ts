import { navigate } from "gatsby";

import { useDispatch, useGlobalContext } from "../contexts/GlobalContext";

type ReduceReturnType = {
  [key: string]: number;
}

const useTags = () => {
  const { posts } = useGlobalContext();

  const dispatch = useDispatch();

  const allTags = posts.map(({ node }) => node.frontmatter?.tags).flat();

  const searchByTag = (tag: string) => {
    dispatch({ type: 'searchByTag', payload: { tag } });

    navigate('/search');
  };

  const tags = Object
    .entries(allTags
      .filter(Boolean)
      .reduce<ReduceReturnType>((acc, cur) => {
        if (!cur) return acc;

        if (Reflect.has(acc, cur)) {
          acc[cur] += 1;
          return acc;
        }

        acc[cur] = 1;
        return acc;
      }, {}));

  return {
    tags,
    searchByTag,
  };
};

export default useTags;
