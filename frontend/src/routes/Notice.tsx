import React, { useState, useEffect } from 'react'
import NavbarLogin from './../components/NavbarLogin'
import { CommunityNotice } from './../components/CommunityNotice'
import NoticeTable from './../components/NoticeTable'

const serverData = [
  { idx: 1, title: 'Ice cream sandwich', regDate: '2023-07-26' },
  { idx: 2, title: 'Eclair', regDate: '2023-06-26' },
  { idx: 3, title: 'Cupcake', regDate: '2023-05-20' },
  { idx: 4, title: 'Gingerbread', regDate: '2023-04-16' },
]
export const Notice = () => {
  // const [data, setData] = useState(serverData)

  // axios data파일 받아오기
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
      <CommunityNotice />
      <NoticeTable data={movies} />
    </div>
  )
}
