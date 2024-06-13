import React from 'react';
import { FooterBox, CtaSection, FooterColumns, FooterColumn, FooterEnd, Input, Button, FooterContainer, Rights, GitHubIcon } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterBox>
      <CtaSection>
        <h3>Subscribe for updates</h3>
        <Input type="email" placeholder="Enter your email" />
        <Button type="submit">Subscribe</Button>
      </CtaSection>
      <FooterContainer>
        <FooterColumns>
          <FooterColumn>
            <h4>Dev</h4>
            <ul>
              <li><a href="#">Tech Stack</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Help the Project</a></li>
            </ul>
          </FooterColumn>
        </FooterColumns>
        <FooterEnd>
          <Rights>&copy; 2024 Converrcy, All rights reserved.</Rights>
          <GitHubIcon href="https://github.com/">
            <img src="github-icon.png" alt="GitHub" />
          </GitHubIcon>
        </FooterEnd>
      </FooterContainer>
    </FooterBox>
  );
};

export default Footer;
