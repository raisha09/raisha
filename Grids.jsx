import { Button, CardActions, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';


const Grids = () => {
    var[product,setProduct]=useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
    .then((response)=>{
        console.log(response)
        setProduct(response.data);
    })
    .catch((error)=>console.log("error"))})
    
    
  return (
    <div style={{margin:"4%"}}>
        <Grid container spacing={2}>
            {product.map((val,i)=>{
             return(
                <Grid item xs={12} sm={6} md={4}> 
                {/* </Grid>
             ) 
            })}
        </Grid> */}
    
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
           sx={{height:140}}
           image={val.image}
           tittle={val.tittle}/>
            
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
            {val.description}
          </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>share</Button>
            <Button size='small'>learn more</Button>
        </CardActions>
      </CardActionArea>
    </Card> */ 
    </Grid>
             ) 
            })}
        </Grid>
  

        {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <TextField variant='outlined' label="item1"></TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField variant='outlined' label="item2"></TextField>
            </Grid>
        </Grid> */}
    </div>
  )
}

export default Grids