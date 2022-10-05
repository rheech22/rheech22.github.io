import { navigate } from 'gatsby';

import { useContext } from '../store/context';

import { enrichTags, sortTags } from '../utils';

const useTags = () => {
  const { posts } = useContext();

  const allTags = posts.map(({ node }) => node.frontmatter?.tags).flat();
  const tags = sortTags(enrichTags(allTags));

  const searchByTag = (tag: string) => {
    navigate('/search', { state: { tag } });
  };

  return {
    tags,
    searchByTag,
  };
};

export default useTags;
