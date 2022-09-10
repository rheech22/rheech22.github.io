import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

const useFilteredPosts = () => {
  const { posts, keyword, tag } = useGlobalContext();

  const [filteredPosts, setFilteredPosts] = useState(posts);

  const getPosts = () => {
    if (keyword) {
      return posts
        .filter(({ node: { frontmatter, html } })=> {
          const hasTitle = frontmatter?.title?.toLowerCase()
            .includes(keyword.toLowerCase());
          const hasContent = html?.toLowerCase()
            .includes(keyword.toLowerCase());

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
  }, [keyword, tag]);

  return filteredPosts;
};

export default useFilteredPosts;