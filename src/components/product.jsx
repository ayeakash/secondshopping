import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import shirt from '../images/tshirt-img.png'

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="50"
          image={shirt}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Yellow Printed Shirt
          </Typography>
          <Typography variant="body2" color="text.secondary">
            MRP: <s>699</s><br />
            OFFER PRICE: 129
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
        <Button size="small" color="primary">
          BUY
        </Button>
      </CardActions>
    </Card>
  );
}