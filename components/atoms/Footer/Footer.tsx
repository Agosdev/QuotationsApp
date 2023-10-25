import React from "react";
import { FooterCon, FooterLink, RedSpan } from "./FooterElements";

interface IFooter {
  numberOfQuotes?: Number;
}

const Footer = ({numberOfQuotes}: IFooter) => {
  return (
    <FooterCon>
     <>
       {numberOfQuotes && `Quotes Generated: ${numberOfQuotes}.`}
       Developed with <RedSpan>♥</RedSpan> by <FooterLink href="https://github.com/Agosdev" target="_blank" rel="noopener noreferrer"> @Agosdev</FooterLink>. 
     </>
    </FooterCon>
  );
};

export default Footer;
