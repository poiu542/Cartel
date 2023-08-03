import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'

interface CounselorCardProps {
  name: string
  grade: number
  gradeCount: number
  introduce: string
  onCardClick: () => void
  imgSrc: string
}

function CounselorCard({
  name,
  grade,
  gradeCount,
  introduce,
  onCardClick,
  imgSrc,
}: CounselorCardProps) {
  return (
    <Card
      sx={{ width: 300, height: 300 }}
      style={{ boxShadow: '3px 3px #e5e5e5', borderRadius: '5px' }}
    >
      <CardMedia
        sx={{ width: 345, height: 140, objectFit: 'cover' }}
        image={imgSrc}
        title="counselor"
      />
      <CardContent sx={{ width: 270, height: 70 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontFamily: 'TheJamsil5Bold' }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {introduce}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">더 보기</Button> */}
        <Rating
          name="text-feedback"
          value={grade}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        ({gradeCount})
      </CardActions>
    </Card>
  )
}

// const CounselorCard: React.FC<CounselorCardProps> = ({
//   name,
//   grade,
//   gradeCount,
//   introduce,
//   onCardClick = () => {},
//   imgSrc,
// }) => (
//   <div
//     className="counselor card"
//     style={{
//       display: 'flex',
//       justifyContent: 'center',
//       width: '363px',
//       height: '200px',
//       cursor: 'pointer',
//     }}
//     onClick={onCardClick}
//   >
//     <div>
//       <div
//         className="top"
//         style={{
//           justifyContent: 'space-between',
//           display: 'flex',
//           alignItems: 'center',
//           border: '5px solid #40BFFF',
//           borderRadius: '20px',
//           width: '330px',
//           height: '200px',
//           background: 'white',
//           boxShadow: '10px 10px gray',
//         }}
//       >
//         <div
//           className="counselor profile image"
//           style={{
//             marginLeft: '10px',
//           }}
//         >
//           <img
//             src={imgSrc}
//             alt="logo"
//             style={{
//               width: '140px',
//               height: '180px',
//             }}
//           />
//         </div>
//         <div
//           className="counselor data"
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginRight: '20px',
//             marginLeft: '20px',
//           }}
//         >
//           <div className="counselor name" style={{ fontSize: '23px' }}>
//             <h3>{name}</h3>
//           </div>
//           <div className="counselor introduce" style={{ fontSize: '15px' }}>
//             {introduce}
//           </div>
//           <br />
//           <div
//             className="counselor grade"
//             style={{ display: 'flex', alignItems: 'center' }}
//           >
//             <img
//               src="./image/star.png"
//               alt="star"
//               style={{
//                 marginRight: '10px',
//               }}
//             />
//             {grade} ({gradeCount})
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// )

export default CounselorCard
