import { useEffect, useState } from 'react';
import { useContext } from '../store/context';

const useFilteredPosts = () => {
  const { posts, searchFilter, searchKeyword, tag } = useContext();

  const [ filteredPosts, setFilteredPosts ] = useState(posts);

  const getPosts = () => {
    if (searchKeyword) {
      return posts
        .filter(({ node: { frontmatter, html } })=> {
          const hasTitle = frontmatter?.title?.toLowerCase()
            .includes(searchKeyword.toLowerCase());
          const hasContent = html?.toLowerCase()
            .includes(searchKeyword.toLowerCase());

          if (searchFilter === 'title') return hasTitle;
          if (searchFilter === 'content') return hasContent;

          return (hasTitle || hasContent);
        });
    }

    if (tag) {
      return posts
        .filter(({ node: { frontmatter } })=>
          frontmatter?.tags?.includes(tag.toLowerCase()));
    }

    return posts;
  };

  useEffect(()=> {
    const filteredPosts = getPosts();

    setFilteredPosts(filteredPosts);
  }, [ posts, tag, searchKeyword, searchFilter ]);

  return filteredPosts;
};

export default useFilteredPosts;
