import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 45px;
  margin-right: 45px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #04471C;
  color: #E0EEC6;
`;

export const Logo = styled.img`
  height: 45px;  // Adjust height as needed
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  margin: 0 10px;
  cursor: pointer;
  color: #E0EEC6;
  text-decoration: none; // Remove underline
  font-weight: 500;
  font-size: 20px;
  &:hover {
    text-decoration: none; // Ensure no underline on hover
  }
`;