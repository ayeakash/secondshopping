import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home'
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const navigate = useNavigate();

  const handleClick = (path) =>{

    navigate(path)
  }

  


  return (
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
          <BottomNavigationAction label="Home" onClick={()=>handleClick('/home')} icon={<HomeIcon />} />
          <BottomNavigationAction label="Search" onClick={()=>handleClick('/search')} icon={<SearchIcon />} />
          <BottomNavigationAction label="Orders" onClick={()=>handleClick('/orders')} icon={<FavoriteIcon />} />

          <BottomNavigationAction label="Cart" onClick={()=>handleClick('/cart')} icon={<ShoppingCartIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
