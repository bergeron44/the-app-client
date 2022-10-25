import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '../components/UI/IconButton'

function createData(
  instruction=String,
  num=Number
) {
  return { instruction, num };
}

const rows = [
  createData('לחץ התחל את המשחק    ', 1),
  createData('הכנס שם משתמש     ',2),
  createData('בחר קטגוריה', 3),
  createData('נסה לענות על השאלה', 4),
  createData('אם אתה טועה תשטה שוט',5),
  createData('העבר את המכשיר לחבר אחר ',6),
  createData('לאחר מכן תבחר להמשיך בקטגוריה הנוכחית לעבור לאחת אחרת או לסיים את המשחק',7),
];


const InstructinsPage = () => {
  return (
    <div>
      <table border='10px' align='center'><h1>עמוד הוראות</h1></table><br/>
    
 
    <TableContainer component={Paper}>
      <Table border='15px' align='center' sx={{ width: '100%', maxWidth: 360, bgcolor: 'lightgreen'} } aria-label="simple table">
        <TableHead >
          <TableRow>
          <TableCell align="right"><h1>הוראה</h1> </TableCell>
            <TableCell align="right"><h1>מספר</h1></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow 
              key={row.name}
               >
              <TableCell component="th" scope="row" align="right" >
                <h3>{row.instruction}</h3>
              </TableCell>
              <TableCell align="right"><h3>{row.num}</h3></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer><br/>
    <IconButton/>
    </div>
    
  )
}

export default InstructinsPage


