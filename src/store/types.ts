// actions

export type Actions = 'setDisplayMode' | 'setPosts' | 'searchByKeyword' | 'searchByTag' | 'clearSearch' | 'setCurrentHeading';

export type BaseState = { tag?: string; displayMode?: string | null };

export type Action = { type: Actions; payload?: any };

// context
export type State = {
  posts: Posts;
  tag: string;
  searchFilter: {
    filter: 'all' | 'title' | 'content';
    keyword: string;
  };
  headingId: string,
  displayMode: 'day' | 'night' | null;
};

export type Posts = Queries.getPostsQuery['allMarkdownRemark']['edges']

