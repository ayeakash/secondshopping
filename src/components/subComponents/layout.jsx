import React from 'react';
import FixedBottomNavigation from './bottomNavbar';

// Adds a persistant component throughout routes

const Layout = ({ children }) => {
  return (
    <div>
      <FixedBottomNavigation />
      {children}
    </div>
  );
};

export default Layout;
