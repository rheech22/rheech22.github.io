export type BaseState = {
  displayMode?: string | null;
};

export type State = {
  posts: Posts;
  headingId: string | null;
  displayMode: 'day' | 'night' | null;
};

export type ActionType = 'setDisplayMode' | 'setPosts' | 'setCurrentHeadingId';

export type Payload = {
  [P in keyof State]?: State[P];
};

export type Action = { type: ActionType; payload?: Payload };

export type Posts = Queries.getPostsQuery['allMarkdownRemark']['edges'];

export type Headings = Queries.Maybe<
  ReadonlyArray<Queries.Maybe<Queries.MarkdownHeading>>
>;
