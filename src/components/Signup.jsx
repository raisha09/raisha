import { TextField, Typography ,Button} from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    var[data,setData]=useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        console.log(data);
    }
  return (
    <div>
        <Typography variant='h4'>Signup</Typography>
        <br /><br />
        <TextField variant='standard'label="username" name='username' onChange={inputHandler}></TextField>
        <br /><br />
        <TextField variant='standard'label="email"  name="email" onChange={inputHandler}></TextField>
        <br /><br />
        <TextField variant='standard'label="password" name="password" onChange={inputHandler}></TextField>
        <br /><br />
        <Button variant="text">submit</Button>
    </div>
  )
}

export default Signup