export type Counsel = {
  id: number;
  date: string;
  count?: number;
  title: string;
  state?: number;
  clientCount?: number;
  price?: number;
  introduction?: string;
  weekCount?: number;
};

export type Curriculrum = {
  id: number;
  title: string;
  content: string;
};

export type Consulting = {
  id: number;
  date: string;
  content: string;
  state?: number;
};
