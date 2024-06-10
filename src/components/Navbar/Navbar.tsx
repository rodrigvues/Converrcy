import React, { useState } from 'react';
import { NavContainer, NavItem, MenuButton } from '../styles';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <MenuButton onClick={toggleMenu}>&#9776;</MenuButton>
      {isOpen && (
        <>
          <NavItem>About</NavItem>
          <NavItem>More Projects</NavItem>
          <NavItem>Contact</NavItem>
        </>
      )}
    </NavContainer>
  );
};

export default Navbar;

