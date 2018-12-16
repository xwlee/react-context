import React from 'react';
import UserMenu from './UserMenu';

const Header = ({ onLogout }) => (
  <header className="Header">
    <h2>My Main</h2>
    <UserMenu />
  </header>
);

export default Header;