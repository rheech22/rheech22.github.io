import { useContext } from '../store/context';
import { Posts } from '../store/types';

interface Params {
  searchFilter?: string;
  searchKeyword?: string;
}

interface Filter extends Params {
  posts: Posts;
}

const filter = ({ posts, searchKeyword, searchFilter }: Filter) => {
  if (searchKeyword) {
    return posts.filter(
      ({
        node: {
          frontmatter: { title },
          html,
        },
      }) => {
        const hasTitle = title
          .toLowerCase()
          .includes(searchKeyword.toLowerCase());

        const hasContent = html
          ?.toLowerCase()
          .includes(searchKeyword.toLowerCase());

        if (searchFilter === 'title') return hasTitle;

        if (searchFilter === 'content') return hasContent;

        return hasTitle || hasContent;
      }
    );
  }

  return posts;
};

const useFilteredPosts = ({ searchFilter, searchKeyword }: Params) => {
  const { posts } = useContext();

  const filteredPosts = filter({
    posts,
    searchFilter,
    searchKeyword,
  });

  return filteredPosts;
};

export default useFilteredPosts;
