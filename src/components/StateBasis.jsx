import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const StateBasis = () => {
    var [fname,setFname]=useState("raisha");
    var[val,setVal]=useState()
    const handleInput=(e)=>{
        // console.log(e.target.value);
        // setFname(e.target.value);
        setVal(e.target.value);
    }
    const submitHndler=()=>{
        console.log("clicked");
        setFname(val);
    }
    return(
    <div>
        <Typography variant='h4'>welcome {fname}</Typography>
        <br /><br />
        <TextField variant='outlined' onChange={handleInput} label="type your name"/>
        <br /><br />
        <Button variant='contained' onClick={submitHndler}>sumbit</Button>

    </div>
  )
}

export default StateBasis