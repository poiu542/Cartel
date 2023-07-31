import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom'

type QnaBoardTable = {
  id: number
  title: string
  year: string
  rating: string
  language: string
}

interface QnaTableProps {
  data: QnaBoardTable[]
}

export const QnaTable: React.FC<QnaTableProps> = ({ data }) => {
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
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <Link to={`/qna/${row.id}`}>
                <TableCell>{row.title}</TableCell>
              </Link>

              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              <TableCell align="right">{row.language}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
