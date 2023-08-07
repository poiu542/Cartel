// import React, { useState, useEffect } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import { CommunityFree } from '../components/CommunityFree'
import { QnaTable } from '../components/QnaTable'
import { useQuery } from 'react-query'
// import { fetchNotices } from '../hooks/useNoticesData'
import StyledButton from '../styles/StyledButton'
// import { CommunityNotice } from './../components/CommunityNotice'
// import { fetchMovies } from '../hooks/useNoticesData'
import { useNavigate } from 'react-router'
// import { BoardData } from '../model/board'
import { getBoard } from '../hooks/useboard'
import { BoardData } from '../model/board'

export const Qna = () => {
  const navigate = useNavigate()

  // interface ApiResponse {
  //   data: BoardData[]
  // }
  // interface Movie {
  //   id: number
  //   title: string
  //   year: string
  //   rating: string
  //   language: string
  // }
  interface ApiResponse {
    data: BoardData
  }
  // interface ApiResponse {
  //   data: {

  //   }
  // }

  // axios data파일 받아오기
  const {
    isLoading,
    data: boards,
    isError,
    error,
    refetch,
  } = useQuery<ApiResponse>(['qna'], getBoard)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError || !boards) {
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
  console.log(boards)
  return (
    <div>
      <NavbarLogin />
      <CommunityFree />
      <div
        style={{ display: 'flex', justifyContent: 'end', marginRight: '250px' }}
      >
        <StyledButton
          primary
          marginTop="20px"
          marginBottom="20px"
          fontSize="18px"
          width="100px"
          height="50px"
          onClick={() => navigate('/qna/write')}
        >
          글 쓰기
        </StyledButton>
      </div>
      {boards && <QnaTable data={boards} />}
      {/* {movies && <QnaTable data={movies.data.movies} />} */}

      {/* {nav} */}

      {/* data가 존재하는 경우에만 <NoticeTable> 컴포넌트를 렌더링합니다. */}
    </div>
  )
}
