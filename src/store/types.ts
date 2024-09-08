export type State = Partial<{
  wikis: Wikis;
  headingId: string;
  displayMode: 'day' | 'night';
}>;

export type ActionType = 'setDisplayMode' | 'setWikis' | 'setCurrentHeadingId';

export type Payload = {
  [P in keyof State]: State[P];
};

export type Action = { type: ActionType; payload: Payload };

export type Wikis = ReadonlyArray<{
  readonly node: {
    readonly id: string;
    readonly html: string | null;
    readonly fields: { readonly slug: string; readonly title: string };
    readonly frontmatter: { readonly created: string; readonly updated: string };
  };
}>;

type MarkdownHeadings = ReadonlyArray<Queries.Maybe<Queries.MarkdownHeading>>;

export type Headings = Queries.Maybe<MarkdownHeadings>;
