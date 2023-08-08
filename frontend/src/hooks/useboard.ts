import {
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { Observable } from 'rxjs'
import { BoardData } from '../model/board'

export const getBoards = () => {
  return axios.get(`/articles`).then((res) => res.data)
}

export const getBoard = (id: number | null) => {
  return axios.get(`/articles/${id}`).then((res) => res.data)
}

// export const getBoard = () => {
//   return axios.get(`/articles`).then((res) => {
//     const posts = res.data
//     const sortedPosts = posts.sort(
//       (a: any, b: any) =>
//         new Date(a.date).getTime() - new Date(b.date).getTime(),
//     )
//     return sortedPosts
//   })
// }
// export const useGetBoard = () => {
//   useQuery(['qna'], getBoard)
// }

export const postBoard = (board: BoardData) => {
  return axios.post('/articles', board)
}

export const usePostBoard = () => {
  return useMutation(postBoard)
}