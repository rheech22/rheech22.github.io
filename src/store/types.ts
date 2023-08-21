export type BaseState = {
  displayMode?: string | null;
};

export type State = {
  wikis: Wikis;
  headingId: string | null;
  displayMode: 'day' | 'night' | null;
};

export type ActionType = 'setDisplayMode' | 'setWikis' | 'setCurrentHeadingId';

export type Payload = {
  [P in keyof State]?: State[P];
};

export type Action = { type: ActionType; payload?: Payload };

export type Wikis = Queries.getWikisQuery['allMarkdownRemark']['edges'];

type MarkdownHeadings = ReadonlyArray<Queries.Maybe<Queries.MarkdownHeading>>;

export type Headings = Queries.Maybe<MarkdownHeadings>;
