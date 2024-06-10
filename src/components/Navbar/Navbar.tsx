import React from 'react';
import { NavContainer, NavItems, NavItem, Logo } from './styles';
import logo from '../../assets/images/logo.png'; // Adjust the path based on your folder structure

const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <Logo src={logo} alt="Logo" />
      <NavItems>
        <NavItem>About</NavItem>
        <NavItem>More Projects</NavItem>
        <NavItem>Contact</NavItem>
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;
