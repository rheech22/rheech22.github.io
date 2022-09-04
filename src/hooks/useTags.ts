import { navigate } from "gatsby";

import { useDispatch, useGlobalContext } from "../contexts/GlobalContext";

import { enrichTags, sortTags } from "../utils";

const useTags = () => {
  const { posts } = useGlobalContext();

  const dispatch = useDispatch();

  const allTags = posts.map(({ node }) => node.frontmatter?.tags).flat();

  const tags = sortTags(enrichTags(allTags));

  const searchByTag = (tag: string) => {
    dispatch({ type: 'searchByTag', payload: { tag } });

    navigate('/search');
  };

  return {
    tags,
    searchByTag,
  };
};

export default useTags;
