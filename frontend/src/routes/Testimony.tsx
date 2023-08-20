import React, { useEffect, useState } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import ArticleBar from '../components/ArticleBar'
import { useNavigate } from 'react-router'
import { BoardData } from '../model/board'
import Pagination from 'react-js-pagination'
import axios from 'axios'
import './Question.css'
import Modal from 'react-modal'
import { TestimonyTable } from '../components/TestimonyTable'
import { useRecoilState } from 'recoil'
import { userState } from '../recoil/atoms/userState'

export const Testimony = () => {
  const modalStyle = {
    content: {
      width: '500px',
      height: '300px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '2px solid lightgray',
      padding: '20px',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경 어두워짐 효과
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
  const navigate = useNavigate()
  const [user, setUser] = useRecoilState(userState)

  const [boardList, setBoardList] = useState<BoardData[]>([]) // axios에서 받아온 전체 게시글 데이터
  const [currentPost, setCurrentPost] = useState<BoardData[]>(boardList) // 페이지네이션을 통해 보여줄 게시글
  const [page, setPage] = useState<number>(1) // 현재 페이지 번호
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<{
    title: string
    content: string
  }>({
    title: '',
    content: '',
  })

  const postPerPage: number = 15 // 페이지 당 게시글 개수
  const indexOfLastPost: number = page * postPerPage
  const indexOfFirstPost: number = indexOfLastPost - postPerPage

  interface BoardApiResponse {
    reverse(): BoardApiResponse
    data: BoardData[]
  }
  const handlePageChange = (page: number) => {
    setPage(page)
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}review/${user.id}`)
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

  const detailTestimony = (post: BoardData) => {
    setModalContent({ title: post.title, content: post.content })
    setShowModal(true)
  }
  return (
    <div>
      <NavbarLogin />
      <ArticleBar name="소감문" />
      <div className="board-list">
        {boardList && (
          <TestimonyTable
            data={currentPost}
            // DetailTestimony={detailTestimony}
          />
        )}

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
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={modalStyle}
        contentLabel="Journal Modal"
      >
        <button
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
          }}
          onClick={() => setShowModal(false)}
        >
          X
        </button>
        <h2>{modalContent.title}</h2>
        <p>{modalContent.content}</p>
      </Modal>
    </div>
  )
}
