import React from 'react'

interface CounselorDataBoxProps {}

const CounselorDataBox: React.FC<CounselorDataBoxProps> = () => {
  const handlePostClick = () => {
    alert('Post clicked')
  }

  const handleCommentClick = () => {
    alert('Comment clicked')
  }

  const handleCounselClick = () => {
    alert('Counsel clicked')
  }

  const handleCounselorJournalClick = () => {
    alert('Counselor Journal clicked')
  }

  return (
    <div
      className="my data check"
      style={{
        width: '269px',
        height: '189px',
      }}
    >
      <div
        className="my post check"
        style={{
          width: '269px',
          height: '63px',
          border: '1px solid #E9ECEF',
          borderRadius: '8px 8px 0px 0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 10px',
          cursor: 'pointer',
        }}
        onClick={handlePostClick}
      >
        <strong>내가 쓴 게시글 보기</strong>
        <span>&gt;&gt;</span>
      </div>
      <div
        className="my comment check"
        style={{
          width: '269px',
          height: '63px',
          border: '1px solid #E9ECEF',
          borderRadius: '0px 0px 0px 0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 10px',
          cursor: 'pointer',
        }}
        onClick={handleCommentClick}
      >
        <strong>내가 쓴 댓글 보기</strong>
        <span>&gt;&gt;</span>
      </div>
      <div
        className="my comment check"
        style={{
          width: '269px',
          height: '63px',
          border: '1px solid #E9ECEF',
          borderRadius: '0px 0px 0px 0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 10px',
          cursor: 'pointer',
        }}
        onClick={handleCounselClick}
      >
        <strong>내 상담 보기</strong>
        <span>&gt;&gt;</span>
      </div>
      <div
        className="my counsel check"
        style={{
          width: '269px',
          height: '63px',
          border: '1px solid #E9ECEF',
          borderRadius: '0px 0px 8px 8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 10px',
          cursor: 'pointer',
        }}
        onClick={handleCounselorJournalClick}
      >
        <strong>상담일지 보기</strong>
        <span>&gt;&gt;</span>
      </div>
    </div>
  )
}

export default CounselorDataBox
