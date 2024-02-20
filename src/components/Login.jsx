import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <br/><br/><br /><br />
        <h1>Login page</h1>
        <input placeholder='username'/>
        <br/>
        <input placeholder='password'/>
        <br/>
        <button>submit</button>
        <br /><br /><br /><br />
        <Typography variant="h1">Login page</Typography>
        <br />
        <TextField variant="outlined" label="user name"></TextField>
        
        <TextField variant='standard' label="password"></TextField>
        
        <TextField variant='filled' label="email"></TextField>
         <br /><br />
        <Button variant='contained'>submit</Button>
    
        <Button variant='text'>submit</Button>
    
        <Button variant="outlined">submit</Button>
    


    </div>
  )
}

export default Login