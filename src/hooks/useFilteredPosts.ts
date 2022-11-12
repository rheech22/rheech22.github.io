import { useLayoutEffect, useState } from 'react';
import { useContext, useDispatch } from '../store/context';

interface Params {
  series?: string;
  searchFilter?: string;
  searchKeyword?: string;
  tag?: string;
}

const useFilteredPosts = ({ series, searchFilter, searchKeyword, tag }: Params) => {
  const dispatch = useDispatch();

  const { posts } = useContext();

  const [ filteredPosts, setFilteredPosts ] = useState(posts);

  const getPosts = () => {
    if (searchKeyword) {
      return posts
        .filter(({ node: { frontmatter: { title }, html } }) => {
          const hasTitle = title.toLowerCase()
            .includes(searchKeyword.toLowerCase());
          const hasContent = html?.toLowerCase()
            .includes(searchKeyword.toLowerCase());

          if (searchFilter === 'title') return hasTitle;
          if (searchFilter === 'content') return hasContent;

          return (hasTitle || hasContent);
        });
    }

    if (tag) {
      dispatch({ type: 'setCurrentTag', payload: { tag: tag.toLowerCase() } });

      return posts
        .filter(({ node: { frontmatter: { tags } } }) => {
          return tags?.some(t => t?.toLowerCase() === tag.toLowerCase());
        });
    }

    if (series) {
      dispatch({ type: 'setCurrentSeries', payload: { series } });

      return posts
        .filter(({ node: { frontmatter } }) => frontmatter.series === series);
    }

    return posts;
  };

  useLayoutEffect(() => {
    const filteredPosts = getPosts();

    setFilteredPosts(filteredPosts);
  }, [ posts, tag, series, searchKeyword, searchFilter ]);

  return filteredPosts;
};

export default useFilteredPosts;
