import { navigate } from 'gatsby';

import { useContext } from '../store/context';

import { enrichTags, sortTags } from '../utils';

const useTags = () => {
  const { posts, tag: currentTag } = useContext();

  const allTags = posts.map(({ node: { frontmatter: { tags } } }) => tags).flat();

  const tags = sortTags(enrichTags(allTags));

  const searchByTag = (tag: string) => {
    if (tag.toLowerCase() === currentTag) return navigate('/');

    navigate(`/search/?tag=${encodeURI(tag)}`, { state: { tag } });
  };

  return {
    tags,
    searchByTag,
  };
};

export default useTags;
