import { useLayoutEffect } from 'react';
import { useContext, useDispatch } from '../store/context';
import { Posts } from '../store/types';

interface Params {
  series?: string;
  searchFilter?: string;
  searchKeyword?: string;
  tag?: string;
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

const useFilteredPosts = ({
  searchFilter,
  searchKeyword,
  tag,
  series,
}: Params) => {
  const dispatch = useDispatch();

  const { posts } = useContext();

  useLayoutEffect(() => {
    tag &&
      dispatch({ type: 'setCurrentTag', payload: { tag: tag.toLowerCase() } });
    series && dispatch({ type: 'setCurrentSeries', payload: { series } });
  }, [tag, series]);

  const filteredPosts = filter({
    posts,
    searchFilter,
    searchKeyword,
    series,
    tag,
  });

  return filteredPosts;
};

export default useFilteredPosts;
