export type ItemFullType = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
  url: string;
  deleted: boolean;
  text: string;
  dead: boolean;
  parent: number;
  poll: number;
  parts: number[];
};

export type StoryListType = ItemFullType['id'][];
export type StoryType = ItemFullType['type'];
export type ItemIdType = ItemFullType['id'];
