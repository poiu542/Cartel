import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
  useQueryClient,
} from 'react-query'
import axios, { AxiosError, AxiosResponse } from 'axios'

export const getBoard = () => {
  return axios.get(`/articles`).then((res) => res.data)
}

export const useGetBoard = () => {
  useQuery(['qna'], getBoard)
}
