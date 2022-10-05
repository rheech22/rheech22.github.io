
export type BaseState = { tag?: string | null; displayMode?: string | null, series?: string | null };

export type State = {
  posts: Posts;
  tag: string | null;
  series: string | null;
  searchFilter: string | null;
  searchKeyword: string | null;
  headingId: string | null,
  displayMode: 'day' | 'night' | null;
};

export type ActionType = 'setDisplayMode' | 'setPosts' | 'searchByKeyword' | 'searchByTag' | 'clearSearch' | 'setCurrentHeading' | 'searchBySeries';

export type Payload = {
  [P in keyof State]?: State[P];
}

export type Action = { type: ActionType; payload: Payload};

export type Posts = Queries.getPostsQuery['allMarkdownRemark']['edges']

