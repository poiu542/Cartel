import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
  useQueryClient,
} from 'react-query'
import axios, { AxiosError, AxiosResponse } from 'axios'

interface Notice {
  id: number
  title: string
  year: number
}

export const fetchTests = (pageParams: number) => {
  return axios.get(
    ` https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${pageParams}`,
  )
}

export const fetchNotices = (pageParams: number) => {
  return axios
    .get(
      `https://yts.mx/api/v2/list_movies.json?_limit=5&minimum_rating=9&sort_by=year&_page=${pageParams}`,
    )
    .then((res) => res.data)
}

// export const useNoticesData = (onSuccess: any, onError: any) => {
//   return useQuery(['notice'], fetchNotices, {
//     onSuccess,
//     onError,
//   })
// }

// const useNoticesData: (onSuccess: any, onError: any) => UseQueryResult<AxiosResponse<any, any>, unknown>
