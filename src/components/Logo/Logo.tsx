import React from 'react';
import { LogoContainer, LogoImage, Title } from '../styles';

const Logo: React.FC = () => (
  <LogoContainer>
    <LogoImage src={'./logo.png'} alt="Converrcy Logo" />
    <Title>Converrcy</Title>
  </LogoContainer>
);

export default Logo;
