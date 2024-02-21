import { Button, TextField, Typography, iconButtonClasses } from '@mui/material'
import React, { useState } from 'react'

const Text = () => {
    var[num,setNum]=useState(["Hello!!"])
    var[data,setData]=useState("")
    const Number=(e)=>{
        console.log("on")
        setData(e.target.value)
        console.log("num",data)
    }
    const submit=()=>{
        console.log("c")
        setNum([...num,data]);
        console.log("sub")
        setData("");

    }
      
    
  return (
    <div style={{marginTop:"50px"}}>
       <Typography variant='h5'>enter element</Typography>
       <br /><br />
        <TextField variant='outlined'  label="number"  value={data} onChange={Number}></TextField>
        <br /><br />
        <Button variant='contained' onClick={submit}> submit</Button>
           <ul>
              {num.map((v,i)=>
              {
                return<li key={i}>{v}</li>
              })}    
           </ul>
            
    </div>
  )
}

export default Text