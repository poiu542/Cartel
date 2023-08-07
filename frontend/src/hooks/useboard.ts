import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
  useQueryClient,
} from 'react-query'
import axios, { AxiosError, AxiosResponse } from 'axios'

export const getBoard = () => {
  return axios
    .get(`http://i9b209.p.ssafy.io:8080/articles`)
    .then((res) => res.data)
}
