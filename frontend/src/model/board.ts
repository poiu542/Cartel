export type Board = {
  title: string;
  content: string;
  date?: string;
  id: number;
  state?: number;
};

export type Post = {
  post: Board;
  level: number;
  view?: number;
  type?: number;
};

export type CounselPost = {
  post: Board;
  type?: number;
};

export type Comment = Omit<Board, 'title'>;

export type Evaluation = {
  evaluation: Board;
  rate: number;
};
