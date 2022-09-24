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

    const param = new URLSearchParams(location.search).get('tag');

    if (param === tag) return navigate('/search');

    navigate(`/search?tag=${encodeURI(tag)}`);
  };

  return {
    tags,
    searchByTag,
  };
};

export default useTags;
