import React, { useState } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import CounselorCard from '../components/CounselorCard'

export const Counselor = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // 예시 데이터
  const counselorData = [
    {
      id: 1,
      name: '박태흠',
      grade: 4.8,
      gradeCount: 51,
      introduce: '글자수 27자 이상이면 27자 까지만 나오고 그 뒤는 . . .',
      imgSrc:
        'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/5U3n/image/MEdGxSIxzO4h9s6d_SjkKtd_sjA.jpg',
    },
    {
      id: 2,
      name: '이지훈',
      grade: 4.7,
      gradeCount: 40,
      introduce: '감정의 세계에 대해 깊이 이해하고 싶어하는 상담사',
      imgSrc:
        'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/5U3n/image/MEdGxSIxzO4h9s6d_SjkKtd_sjA.jpg',
    },
    {
      id: 3,
      name: '김영희',
      grade: 4.9,
      gradeCount: 60,
      introduce: '진정한 행복을 찾아나서는 여행자',
      imgSrc:
        'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/5U3n/image/MEdGxSIxzO4h9s6d_SjkKtd_sjA.jpg',
    },
    {
      id: 4,
      name: '최영수',
      grade: 4.7,
      gradeCount: 30,
      introduce: '감정을 이해하는데 도움이 되는 상담사',
      imgSrc:
        'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/5U3n/image/MEdGxSIxzO4h9s6d_SjkKtd_sjA.jpg',
    },
    {
      id: 5,
      name: '이영희',
      grade: 4.8,
      gradeCount: 52,
      introduce: '즐거움을 찾는 여행자',
      imgSrc:
        'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/5U3n/image/MEdGxSIxzO4h9s6d_SjkKtd_sjA.jpg',
    },
    {
      id: 6,
      name: '김민수',
      grade: 4.7,
      gradeCount: 42,
      introduce: '행복을 꿈꾸는 사람',
      imgSrc:
        'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/5U3n/image/MEdGxSIxzO4h9s6d_SjkKtd_sjA.jpg',
    },
    {
      id: 7,
      name: '박지민',
      grade: 4.6,
      gradeCount: 33,
      introduce: '감정의 세계를 탐험하는 상담사',
      imgSrc:
        'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/5U3n/image/MEdGxSIxzO4h9s6d_SjkKtd_sjA.jpg',
    },
    {
      id: 8,
      name: '장미란',
      grade: 4.5,
      gradeCount: 41,
      introduce: '사람의 마음을 이해하려는 상담사',
      imgSrc:
        'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/5U3n/image/MEdGxSIxzO4h9s6d_SjkKtd_sjA.jpg',
    },
    {
      id: 9,
      name: '이진수',
      grade: 4.9,
      gradeCount: 60,
      introduce: '생각의 깊이를 쫓는 상담사',
      imgSrc:
        'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/5U3n/image/MEdGxSIxzO4h9s6d_SjkKtd_sjA.jpg',
    },
    {
      id: 10,
      name: '김철수',
      grade: 4.8,
      gradeCount: 51,
      introduce: '감정을 이해하는 여행자',
      imgSrc:
        'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/5U3n/image/MEdGxSIxzO4h9s6d_SjkKtd_sjA.jpg',
    },
    {
      id: 11,
      name: '박영희',
      grade: 4.7,
      gradeCount: 42,
      introduce:
        '감정을 탐험하는 상담사감정을 탐험하는 상담사감정을 탐험하는 상담사감정을 탐험하는 상담사감정을 탐험하는 상담사감정을 탐험하는 상담사',
      imgSrc:
        'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/5U3n/image/MEdGxSIxzO4h9s6d_SjkKtd_sjA.jpg',
    },
    {
      id: 12,
      name: '이민호',
      grade: 4.8,
      gradeCount: 50,
      introduce:
        '자신의 감정을 깊이 이해하려는 사람자신의 감정을 깊이 이해하려는 사람',
      imgSrc:
        'https://img1.daumcdn.net/thumb/R12 80x0/?fname=http://t1.daumcdn.net/brunch/service/user/5U3n/image/MEdGxSIxzO4h9s6d_SjkKtd_sjA.jpg',
    },
    {
      id: 13,
      name: '김지훈',
      grade: 4.9,
      gradeCount: 53,
      introduce: '사람의 마음을 이해하려는 상담사',
      imgSrc:
        'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/5U3n/image/MEdGxSIxzO4h9s6d_SjkKtd_sjA.jpg',
    },
  ]

  // 검색어에 매칭되는 데이터만 필터링
  const filteredData = counselorData.filter((item) =>
    item.name.includes(searchTerm),
  )

  const counselorButtonClick = (id: number) => {
    navigate(`/counselor/${id}`)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <div className="Navbar">
        <NavbarLogin />
      </div>
      <div
        className="blank"
        style={{
          height: '165px',
          width: '100%',
          backgroundColor: '#ECF9FF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* 상담사 name으로 검색 */}
        <input
          type="search box"
          placeholder="찾을 상담사를 입력해주세요"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            width: '882px',
            height: '66px',
            borderRadius: '10px',
            border: '1.5px solid #40BFFF',
          }}
        />
      </div>
      <div
        className="blank"
        style={{
          marginTop: '50px',
          height: '100px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          position: 'relative',
        }}
      >
        <div
          className="Counselor Cart List"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '20px',
            margin: '40px',
          }}
        >
          {/* 필터링된 데이터를 렌더링 */}
          {filteredData
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item, index) => (
              <div style={{ margin: '10px 60px' }}>
                <CounselorCard
                  onCardClick={() => counselorButtonClick(item.id)}
                  name={item.name}
                  grade={item.grade}
                  gradeCount={item.gradeCount}
                  introduce={
                    item.introduce.length > 27
                      ? item.introduce.substring(0, 27) + '...'
                      : item.introduce
                  }
                  imgSrc={item.imgSrc}
                />
              </div>
            ))}
        </div>
      </div>
      <div
        className="page change"
        style={{
          height: '100px',
          width: '100%',
          marginTop: '700px',
          backgroundColor: '#ECF9FF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          style={{
            cursor: 'pointer',
            padding: '10px 20px',
            margin: '0 10px',
            backgroundColor: '#00AAFF',
            borderRadius: '10px',
            color: 'white',
            fontWeight: 'bold',
            userSelect: 'none',
          }}
        >
          Prev
        </div>
        <div
          style={{
            padding: '10px 20px',
            margin: '0 10px',
            borderRadius: '10px',
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          {currentPage}
        </div>
        <div
          onClick={() =>
            setCurrentPage(
              Math.min(
                Math.ceil(filteredData.length / itemsPerPage),
                currentPage + 1,
              ),
            )
          }
          style={{
            cursor: 'pointer',
            padding: '10px 20px',
            margin: '0 10px',
            backgroundColor: '#00AAFF',
            borderRadius: '10px',
            color: 'white',
            fontWeight: 'bold',
            userSelect: 'none',
          }}
        >
          Next
        </div>
      </div>
      <Footer />
    </div>
  )
}
