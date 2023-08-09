export type Board = {
  title: string
  content: string
  date?: string
  id: number
  state?: number
  nickName?: string
}

export type FreeBoard = {
  post: Board
  level: number
  view?: number
  type?: number
}

export type CounselBoard = {
  post: Board
  type?: number
}

export interface BoardData {
  id: number
  title: string
  content: string
  level: number
  views: number
  userId: number
  type: number
  status: number
}

export type Comment = Omit<Board, 'title'>
