import React, { useEffect, useState } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import ArticleBar from '../components/ArticleBar'
import { FreeBoardTable } from './../components/FreeBoardTable'
import StyledButton from './../styles/StyledButton'
import { CounselJournalTable } from '../components/CounselJournalTable'

export const CounselJournal = () => {
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
        <ArticleBar name="상담일지" />
      </div>
      <CounselJournalTable data={movies} />
    </div>
  )
}
