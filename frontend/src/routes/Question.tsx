import React, { useState, useEffect } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import { CommunityFree } from '../components/CommunityFree'
import { QnaTable } from '../components/QnaTable'
import { useQuery } from 'react-query'
import StyledButton from '../styles/StyledButton'
import { useNavigate } from 'react-router'
// import { BoardData } from '../model/board'
import { getBoard, getBoards } from '../hooks/useboard'
import { BoardData } from '../model/board'
import Pagination from 'react-js-pagination'
import axios from 'axios'
import './Question.css'

export const Qna = () => {
  const navigate = useNavigate()

  const [boardList, setBoardList] = useState<BoardData[]>([]) // axios에서 받아온 전체 게시글 데이터
  const [currentPost, setCurrentPost] = useState<BoardData[]>(boardList) // 페이지네이션을 통해 보여줄 게시글
  const [page, setPage] = useState<number>(1) // 현재 페이지 번호

  const postPerPage: number = 3 // 페이지 당 게시글 개수
  const indexOfLastPost: number = page * postPerPage
  const indexOfFirstPost: number = indexOfLastPost - postPerPage

  const handlePageChange = (page: number) => {
    setPage(page)
  }
  interface BoardApiResponse {
    reverse(): BoardApiResponse
    data: BoardData[]
  }

  useEffect(() => {
    axios
      .get('/articles')
      .then((response) => {
        setBoardList([...response.data].reverse())
      })

      .catch(function (error) {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    setCurrentPost(boardList.slice(indexOfFirstPost, indexOfLastPost))
  }, [boardList, page])

  return (
    <>
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
      <div className="board-list">
        {boardList && <QnaTable data={currentPost} />}

        <Pagination
          activePage={page}
          itemsCountPerPage={postPerPage}
          totalItemsCount={boardList.length}
          pageRangeDisplayed={5}
          prevPageText={'‹'}
          nextPageText={'›'}
          onChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default Qna
// axios data파일 받아오기
// const {
//   isLoading,
//   data: boards,
//   isError,
//   error,
//   refetch,
// } = useQuery<BoardApiResponse>(['qna'], getBoards, {
//   select: (boards) => boards.reverse(),
// })

// if (isLoading) {
//   return <h2>Loading...</h2>
// }

// if (isError || !boards) {
//   console.error(error) // 콘솔에 에러 메시지를 표시합니다.
//   return (
//     <div>
//       <h2>데이터를 불러오는데 에러가 발생했습니다...</h2>
//     </div>
//   )
// }

// console.log(boards)
// return (
//   <div>
//     <NavbarLogin />
//     <CommunityFree />
//     <div
//       style={{ display: 'flex', justifyContent: 'end', marginRight: '250px' }}
//     >
//       <StyledButton
//         primary
//         marginTop="20px"
//         marginBottom="20px"
//         fontSize="18px"
//         width="100px"
//         height="50px"
//         onClick={() => navigate('/qna/write')}
//       >
//         글 쓰기
//       </StyledButton>
//     </div>
{
  /* 수정필요 */
}
{
  /* {boards && <QnaTable data={boards} />} */
}
{
  /* {movies && <QnaTable data={movies.data.movies} />} */
}

{
  /* {nav} */
}
//     </div>
//   )
// }
