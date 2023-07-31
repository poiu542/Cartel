// import React, { useState, useEffect } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import { CommunityFree } from '../components/CommunityFree'
import { QnaTable } from '../components/QnaTable'
import { useQuery } from 'react-query'
import { fetchNotices } from '../hooks/useNoticesData'

export const Qna = () => {
  interface Movie {
    id: number
    title: string
    year: string
    rating: string
    language: string
  }
  interface ApiResponse {
    data: {
      movies: Movie[]
    }
    status: string
  }

  const { isLoading, data, isError, error, refetch } = useQuery<ApiResponse>(
    ['qna'],
    fetchNotices,
  )
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError || !data) {
    console.error(error) // 콘솔에 에러 메시지를 표시합니다.
    return (
      <div>
        <h2>데이터를 불러오는데 에러가 발생했습니다...</h2>
      </div>
    )
  }
  // const [movies, setMovies] = useState([])
  // const getMovies = async () => {
  //   const json = await (
  //     await fetch(
  //       `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`,
  //     )
  //   ).json()
  //   console.log(json)
  //   setMovies(json.data.movies)
  // }
  // useEffect(() => {
  //   getMovies()
  // }, [])
  return (
    <div>
      <NavbarLogin />
      <CommunityFree />
      {data && <QnaTable data={data.data.movies} />}
    </div>
  )
}
