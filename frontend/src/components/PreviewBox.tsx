import React from 'react'

interface Post {
  title: string
}

interface PreviewBoxProps {
  title: string
  posts: Post[]
  onClick: () => void
}

const PreviewBox: React.FC<PreviewBoxProps> = ({ title, posts, onClick }) => (
  <div
    style={{
      border: '1.5px solid #40BFFF',
      borderRadius: '13px',
      width: '400px',
      minHeight: '335px',
      padding: '20px',
      position: 'relative',
    }}
  >
    <h2 style={{ textAlign: 'left', margin: '0 0 5px 0' }}>{title}</h2>
    <hr style={{ borderTop: '2px solid black' }} />
    {Array(6)
      .fill(null)
      .map((_, index) => (
        <React.Fragment key={index}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '5px 0',
            }}
          >
            <h4
              style={{ fontSize: '14px', fontWeight: 'normal', margin: '7px' }}
            >
              {posts[index]?.title || '\u00A0'}
            </h4>
          </div>
          {index < 6 && (
            <hr style={{ borderTop: '1px solid gray', margin: '0px 0' }} />
          )}
        </React.Fragment>
      ))}
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        color: 'gray',
        fontWeight: 'bold',
      }}
    >
      더보기 &gt;
    </button>
  </div>
)

export default PreviewBox
