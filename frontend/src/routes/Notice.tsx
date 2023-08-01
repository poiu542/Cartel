import React, { useState, useEffect } from 'react'
import NavbarLogin from './../components/NavbarLogin'
import { CommunityNotice } from './../components/CommunityNotice'
import NoticeTable from './../components/NoticeTable'
import { useQuery } from 'react-query'
import { fetchNotices } from '../hooks/useNoticesData'
import StyledButton from './../styles/StyledButton'

// const serverData = [
//   { idx: 1, title: 'Ice cream sandwich', regDate: '2023-07-26' },
//   { idx: 2, title: 'Eclair', regDate: '2023-06-26' },
//   { idx: 3, title: 'Cupcake', regDate: '2023-05-20' },
//   { idx: 4, title: 'Gingerbread', regDate: '2023-04-16' },
// ]

interface Movie {
  id: number
  title: string
  year: string
}
interface ApiResponse {
  data: {
    movies: Movie[]
  }
  status: string
}

export const Notice = () => {
  // const [data, setData] = useState(serverData)

  // axios data파일 받아오기
  const { isLoading, data, isError, error, refetch } = useQuery<ApiResponse>(
    ['notice'],
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
  console.log('Fetched Data:', data.data.movies)
  return (
    <div>
      <NavbarLogin />
      <CommunityNotice />
      <StyledButton>작성</StyledButton>
      {data && <NoticeTable data={data.data.movies} />}
      {/* data가 존재하는 경우에만 <NoticeTable> 컴포넌트를 렌더링합니다. */}
    </div>
  )
}
