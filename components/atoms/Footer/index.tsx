import React from "react";
import { FooterCon, FooterLink, RedSpan } from "./FooterElements";


const Footer = () => {
  return (
    <FooterCon>
       Developed with <RedSpan>♥</RedSpan> by <FooterLink href="https://github.com/Agosdev" target="_blank" rel="noopener noreferrer"> @Agosdev</FooterLink> 
    </FooterCon>
  );
};

export default Footer;
