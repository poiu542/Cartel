import React from 'react'

interface Post {
  title: string
}

interface PreviewBoxProps {
  title: string
  posts: Post[]
  onClick: () => void
  width: string
  height: string
}

const PreviewBox: React.FC<PreviewBoxProps> = ({
  title,
  posts,
  onClick,
  width,
  height,
}) => (
  <div
    style={{
      border: '1px solid #3b478f',
      borderRadius: '13px',
      width: width,
      minHeight: height,
      padding: '20px',
      position: 'relative',
      background: 'white',
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
