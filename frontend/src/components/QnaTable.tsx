import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom'
import { NoneStyledLink } from './../styles/Custom'
import StyledButton from './../styles/StyledButton'
import { BoardData } from '../model/board'

interface QnaTableProps {
  data: BoardData[]
}

export const QnaTable: React.FC<QnaTableProps> = ({ data }) => {
  let index = 0

  return (
    <div
      style={{
        borderTop: '3px gray',
        marginBottom: '30px',
        marginTop: '10px',
        paddingLeft: '10px', // 좌측 여백 추가
        paddingRight: '10px', // 우측 여백 추가
      }}
    >
      <Table sx={{ width: '80%', margin: '0 auto' }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ background: '#F8F8F8' }}>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '18px' }}>
              번호
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '18px' }}>
              제목
            </TableCell>
            <TableCell
              sx={{ fontWeight: 'bold', fontSize: '18px' }}
              align="right"
            >
              등록일
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '18px' }}>
              작성자
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '18px' }}>
              레벨
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row, index) => (
              <TableRow key={index}>
                {/* 프론트에서 번호 증가시키기 */}
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                {/* userId를 그냥 id로 수정해야함 board의 id로 */}
                <NoneStyledLink to={`/qna/${row.userId}`}>
                  <TableCell>{row.title}</TableCell>
                </NoneStyledLink>

                <TableCell align="right">{row.userId}</TableCell>
                <TableCell align="right">{row.level}</TableCell>
                {/* 삭제버튼 */}
                <TableCell align="right">{row.views}</TableCell>
                <TableCell align="right">
                  <StyledButton background="white" color="red" fontSize="15px">
                    X
                  </StyledButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}
