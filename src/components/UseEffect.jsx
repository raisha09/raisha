import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    var[x,setx]=useState();
    const one=()=>{
       setx("React");
    }
    const two=()=>{
        setx("angular");
     }
     const three=()=>{
        setx("next");
     }
     useEffect(()=>{
        two();
     },[])

  return (
    <div>
        <Typography variant='h5'> welcome to {x}</Typography>
        <br />

        <Button variant='contained' onClick={one}>React </Button>&nbsp;&nbsp;
        <Button variant='contained' onClick={two}>angular </Button>&nbsp;&nbsp;
        <Button variant='contained' onClick={three}>next </Button>&nbsp;&nbsp;

        
    </div>
  )
  
  }
export default UseEffect