import { navigate } from 'gatsby';

import { useDispatch, useContext } from '../store/context';

import { enrichTags, sortTags } from '../utils';

const useTags = () => {
  const dispatch = useDispatch();
  const { posts } = useContext();

  const allTags = posts.map(({ node }) => node.frontmatter?.tags).flat();
  const tags = sortTags(enrichTags(allTags));

  const searchByTag = (tag: string) => {
    dispatch({ type: 'searchByTag', payload: { tag } });

    navigate('/search', { state: { tag } });
  };

  return {
    tags,
    searchByTag,
  };
};

export default useTags;
