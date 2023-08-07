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
  content: string
  date: string
  level: number
  status: number
  title: string
  type: number
  userId: number
  views: number
}

export type Comment = Omit<Board, 'title'>
