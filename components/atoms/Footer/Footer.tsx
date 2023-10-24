import React from "react";
import { FooterCon, FooterLink, RedSpan } from "./FooterElements";

interface IFooter {
  numberOfQuotes: Number | null;
}

const Footer = ({numberOfQuotes}: IFooter) => {
  return (
    <FooterCon>
     <>
       Quotes Generated: {numberOfQuotes}. 
       Developed with <RedSpan>♥</RedSpan> by <FooterLink href="https://github.com/Agosdev" target="_blank" rel="noopener noreferrer"> @Agosdev</FooterLink>. 
     </>
    </FooterCon>
  );
};

export default Footer;
