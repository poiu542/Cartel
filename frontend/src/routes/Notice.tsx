import React, { useState, useEffect } from 'react'
import NavbarLogin from './../components/NavbarLogin'
import { CommunityNotice } from './../components/CommunityNotice'
import NoticeTable from './../components/NoticeTable'
import { useQuery } from 'react-query'
import { fetchNotices, fetchTests } from '../hooks/useNoticesData'
import StyledButton from './../styles/StyledButton'
import PageButton from '../components/PageButton'
import { useNavigate } from 'react-router'

// const serverData = [
//   { idx: 1, title: 'Ice cream sandwich', regDate: '2023-07-26' },
//   { idx: 2, title: 'Eclair', regDate: '2023-06-26' },
//   { idx: 3, title: 'Cupcake', regDate: '2023-05-20' },
//   { idx: 4, title: 'Gingerbread', regDate: '2023-04-16' },
// ]
export interface UserData {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}
interface TestData {
  page: number
  total: number
  total_pages: number
  data: UserData[]
}

// interface Movie {
//   id: number
//   title: string
//   year: string
// }
// interface ApiResponse {
//   length(length: any): unknown
//   data: {
//     movies: Movie[]
//   }
//   status: string
// }

export const Notice = () => {
  // const [data, setData] = useState(serverData)
  const navigate = useNavigate()
  const [page, setPage] = useState(1)

  // axios data파일 받아오기
  const {
    isLoading,
    data: users,
    isError,
    error,
    refetch,
    isPreviousData,
  } = useQuery<TestData>(['/notice', page], () => fetchTests(page), {
    keepPreviousData: true,
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError || !users) {
    console.error(error) // 콘솔에 에러 메시지를 표시합니다.
    return (
      <div>
        <h2>데이터를 불러오는데 에러가 발생했습니다...</h2>
      </div>
    )
  }

  console.log(users)

  const nextPage = () => setPage((prev) => prev + 1)
  const prevPage = () => setPage((prev) => prev - 1)

  // const content = movies.data.movies.map((movie) => <User key={user.id} user={user} />)
  // 전체 페이지 개수를 movies.data.movies.length 대신에 사용할 totalPage 변수 생성
  const totalPage = users.total_pages // totalPage에 posts 배열의 길이가 할당됨
  const getTotalPages = () =>
    Array.from({ length: totalPage }, (_, index) => index + 1)
  const pagesArray = getTotalPages() // [1, 2, 3, ..., totalPage]와 같은 페이지 숫자 배열 생성

  const nav = (
    <nav className="nav-ex2">
      <button onClick={prevPage} disabled={isPreviousData || page === 1}>
        &lt;
      </button>
      {pagesArray.map((pg: number) => (
        <PageButton
          key={pg}
          pg={pg}
          setPage={setPage}
          isPreviousData={isPreviousData}
        />
      ))}
      <button
        onClick={nextPage}
        disabled={isPreviousData || page === users.total_pages}
      >
        &gt;
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
  // console.log('Fetched Data:', movies.data.movies)
  console.log('Fetched Data:', users)
  return (
    <div>
      <NavbarLogin />
      <CommunityNotice />
      <div
        style={{ display: 'flex', justifyContent: 'end', marginRight: '30px' }}
      >
        <StyledButton
          primary
          marginTop="20px"
          marginBottom="20px"
          fontSize="18px"
          width="100px"
          height="50px"
          onClick={() => navigate('/notice/write')}
        >
          글 쓰기
        </StyledButton>
      </div>
      {/* {data && <NoticeTable data={data.data.movies} />} */}
      {/* {movies && <NoticeTable data={movies.data.movies} />} */}

      {nav}
      {/* {movies && <NoticeTable data={movies.data.movies} />} */}
      {users && <NoticeTable data={users.data} />}
      {/* data가 존재하는 경우에만 <NoticeTable> 컴포넌트를 렌더링합니다. */}
    </div>
  )
}
