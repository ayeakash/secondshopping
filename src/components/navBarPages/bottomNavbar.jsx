import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home'
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';



export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const navigate = useNavigate();

  const handleClick = (path) =>{

    navigate(path)
  }

  


  return (
    <div className='top-layer'>
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction  label="Home" onClick={()=>handleClick('/')} icon={<HomeIcon />} />
          <BottomNavigationAction label="Categories" onClick={()=>handleClick('/categories')} icon={<CategoryIcon />} />
          <BottomNavigationAction label="Orders" onClick={()=>handleClick('/orders')} icon={<FavoriteIcon />} />

          <BottomNavigationAction label="Cart" onClick={()=>handleClick('/cart')} icon={<ShoppingCartIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
    </div>
  );
}
