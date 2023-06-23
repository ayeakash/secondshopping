import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ProductCard(props) {
  const navigate = useNavigate();

  const handleClick = (path) =>{

    navigate(path)
  }

  return (
    <Card sx={{ maxWidth: 320, }} 
    onClick={() => handleClick('/product-details/' + props['data']['category'] + '/'+ props['data']['id'])}>
      <CardActionArea>
      <div className='product-image'> 
        <img src={props['data']['image']} alt='Product Image'></img >
      </div>
        <CardContent>
          <Typography gutterBottom variant='p' component="div" fontSize='15px' margin='0' lineHeight='1.2'>
            {(props['data']['title']).toUpperCase()}
          </Typography>
          <Typography variant="p" color="text.secondary" margin='0px' fontSize='13px'>
            <div ><span className='green'>{Math.floor(props['data']['price']/props['data']['mrp']*100)}% Off</span> <s > ₹{props['data']['mrp']}</s> <strong className='green'> ₹{props['data']['price']}</strong></div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}