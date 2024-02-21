import { TableCell, TableContainer,Table, TableHead, TableRow, TableBody, }from '@mui/material'
import React, { useState ,useEffect} from 'react'
// import UseEffect from './UseEffect';
import axios from 'axios';

const Api = () => {
     var[user,setUsers]=useState([]);
     useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log(response.data)
            setUsers(response.data);
        })
     },[])
  return (
    <div>

<TableContainer>
            <Table>
            
               <TableHead>
                <TableRow>
                    <TableCell> name </TableCell>
                    <TableCell>username</TableCell>

                    <TableCell>city</TableCell>
                </TableRow>
               </TableHead>
               <TableBody>
                {user.map((val,i)=>{
                    return(
                     <TableRow>
                        <TableCell key={i}>{val.name}
                        </TableCell>
                        <TableCell  key={i}>{val.username}</TableCell>
                        <TableCell  key={i}>{val.address.city}</TableCell>
                     </TableRow>
                    )
                })
            }        
                
               </TableBody>
            </Table>

        </TableContainer>
    </div>
  )
}

export default Api