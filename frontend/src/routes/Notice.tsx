import React, { useState, useEffect } from 'react'
import NavbarLogin from './../components/NavbarLogin'
import { CommunityNotice } from './../components/CommunityNotice'
import NoticeTable from './../components/NoticeTable'
import { useQuery } from 'react-query'
import { fetchNotices } from '../hooks/useNoticesData'
import StyledButton from './../styles/StyledButton'
import PageButton from '../components/PageButton'

// const serverData = [
//   { idx: 1, title: 'Ice cream sandwich', regDate: '2023-07-26' },
//   { idx: 2, title: 'Eclair', regDate: '2023-06-26' },
//   { idx: 3, title: 'Cupcake', regDate: '2023-05-20' },
//   { idx: 4, title: 'Gingerbread', regDate: '2023-04-16' },
// ]
interface Test {
  userId: number
  id: number
  title: string
  body: string
}

interface Movie {
  id: number
  title: string
  year: string
}
interface ApiResponse {
  length(length: any): unknown
  data: {
    movies: Movie[]
  }
  status: string
}

export const Notice = () => {
  // const [data, setData] = useState(serverData)
  const [page, setPage] = useState(1)

  // axios data파일 받아오기
  const {
    isLoading,
    data: movies,
    isError,
    error,
    refetch,
    isPreviousData,
  } = useQuery<ApiResponse>(['/notice', page], () => fetchNotices(page), {
    keepPreviousData: true,
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError || !movies) {
    console.error(error) // 콘솔에 에러 메시지를 표시합니다.
    return (
      <div>
        <h2>데이터를 불러오는데 에러가 발생했습니다...</h2>
      </div>
    )
  }

  const nextPage = () => setPage((prev) => prev + 1)
  const prevPage = () => setPage((prev) => prev - 1)

  // const content = movies.data.movies.map((movie) => <User key={user.id} user={user} />)
  // 전체 페이지 개수를 movies.data.movies.length 대신에 사용할 totalPage 변수 생성
  const totalPage = movies.data.movies.length

  // pagesArray 대신에 getTotalPages 함수 사용하여 페이지 숫자 배열 생성
  const getTotalPages = () =>
    Array.from({ length: totalPage }, (_, index) => index + 1)
  const pagesArray = getTotalPages()

  const nav = (
    <nav className="nav-ex2">
      <button onClick={prevPage} disabled={isPreviousData || page === 1}>
        &lt;&lt;
      </button>
      {pagesArray.map((pg) => (
        <PageButton
          key={pg}
          pg={pg}
          setPage={setPage}
          isPreviousData={isPreviousData}
        />
      ))}
      <button
        onClick={nextPage}
        disabled={isPreviousData || page === movies.data.movies.length}
      >
        &gt;&gt;
      </button>
    </nav>
  )

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
  console.log('Fetched Data:', movies.data.movies)
  return (
    <div>
      <NavbarLogin />
      <CommunityNotice />
      <StyledButton>작성</StyledButton>
      {nav}
      {movies && <NoticeTable data={movies.data.movies} />}
      {/* data가 존재하는 경우에만 <NoticeTable> 컴포넌트를 렌더링합니다. */}
    </div>
  )
}
