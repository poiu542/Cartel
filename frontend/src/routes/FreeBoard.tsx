import React, { useEffect, useState } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import ArticleBar from '../components/ArticleBar'
import { FreeBoardTable } from './../components/FreeBoardTable'
import StyledButton from './../styles/StyledButton'
import { useNavigate } from 'react-router'

export const FreeBoard = () => {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`,
      )
    ).json()
    console.log(json)
    setMovies(json.data.movies)
  }
  useEffect(() => {
    getMovies()
  }, [])
  return (
    <div>
      <NavbarLogin />
      <div style={{ marginTop: '30px' }}>
        <ArticleBar name="자유게시판" />
      </div>
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
          onClick={() => navigate('/freeboard/write')}
        >
          글 쓰기
        </StyledButton>
      </div>
      <FreeBoardTable data={movies} />
    </div>
  )
}
