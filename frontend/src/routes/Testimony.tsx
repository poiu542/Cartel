import React, { useEffect, useState } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import ArticleBar from '../components/ArticleBar'
import { FreeBoardTable } from './../components/FreeBoardTable'
import StyledButton from './../styles/StyledButton'

export const Testimony = () => {
  const user = '홍길동'
  const userName = user + '님의 소감문'

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
        <ArticleBar name={userName} />
      </div>
      <StyledButton
        primary
        onClick={() => window.location.replace('/freeboard/write')}
      >
        글 쓰기
      </StyledButton>
      <FreeBoardTable data={movies} />
    </div>
  )
}
