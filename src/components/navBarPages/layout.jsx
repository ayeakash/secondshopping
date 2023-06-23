import React from 'react';
import FixedBottomNavigation from './bottomNavbar';
import PrimarySearchAppBar from './topNavBar';

const Layout = ({ children }) => {

  const currentRoute = window.location.pathname
  const shouldRenderFixedComponent = currentRoute !== '/product-details';

  return (
    <div className='fixed-nav-bar'>
      <PrimarySearchAppBar />
      {shouldRenderFixedComponent && <FixedBottomNavigation />}
      
      {children}
    </div>
  );
};

export default Layout;
