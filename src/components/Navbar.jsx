import { Button, Typography ,AppBar,Toolbar} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography sx={{flexGrow:1}} align='left' variant='h6'>App</Typography>
                <Button ><Link to="/" style={{color:'white',textAlign:'right'}}>Login</Link></Button>
                <Button ><Link to="sign" style={{color:'white',textAlign:'right'}}>Signup</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar