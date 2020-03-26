import React from 'react';
import {
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from 'react-feather';
import FooterStyled from './FooterStyled';

const Footer = () => (
  <FooterStyled>
    <a className="link" href="https://www.instagram.com/sha_code/?hl=fr"><Instagram color="#630063" size={40} /></a>
    <a className="link" href="https://www.linkedin.com/in/shannone-controu-a1042a194/"><Linkedin color="#630063" size={40} /></a>
    <a className="link" href="mailto:shannone.controu@gmail.com"><Mail color="#630063" size={40} /></a>
    <a className="link" href="https://twitter.com/sha_code"><Twitter color="#630063" size={40} /></a>
  </FooterStyled>
);

export default Footer;
