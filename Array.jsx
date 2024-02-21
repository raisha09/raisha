import { TableContainer,Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import React ,{useState} from 'react'

const Array = () => {
    var[name,setName]=useState([
        {"name":"Tiya","age":10},
        {"name":"Hidha","age":20},
        {"name":"Jibin","age":22},
    ]
    )
  return (
    <div>
         <TableContainer>
            <Table>
            
               <TableHead>
                <TableRow>
                    <TableCell style={{color:"red",fontFamily:"cursive",fontSize:"20PX"}}>
                     Name 
                    </TableCell>
                    <TableCell style={{color:"red",fontFamily:"cursive",fontSize:"20PX"}}>
                     Age
                    </TableCell>
                </TableRow>
               </TableHead>
               <TableBody>
                 {name.map((value,index)=>{
                    return(
                        <TableRow>
                            <TableCell>
                                {value.name}
                            </TableCell>
                            <TableCell>{value.age}</TableCell>
                        </TableRow>
                    )
                 })}
               </TableBody>
            </Table>

        </TableContainer>
    </div>
  )
}

export default Array