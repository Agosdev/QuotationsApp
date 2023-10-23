import styled from "styled-components";
import Link from "next/link";
import { Box, CircularProgress } from "@mui/material";

 export const BackgroundCon = styled.div`
 background-size: 400% 400%;
 height: 100vh;
 width: 100vw;
 background-color: transparent;
`;

export const FooterCon = styled.div`
  width: 100vw;
  height: 30px;
  text-align: center;
  font-family: 'Source Code Pro', monospace;
  font-size: 15px;
  position: absolute;
  bottom: 0;
  color: var(--gray);
  z-index: 999999;
  background-color: transparent;
`;

export const RedSpan = styled.span`
    color: red;
    background-color: transparent;
`;

export const FooterLink = styled(Link)`
    color: var(--gray);
    background-color: transparent;
`;

export const QuoteGeneratorCon = styled.div`
    min-height: 350px;
    min-width: 350px;
    /* height: 70vh;
    width: 70vw; */
    /* border: 2px solid #ffffff22; */
    /* border-radius: 15px; */
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    z-index: 2;

    background-color: transparent;

    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
    /* backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px ); */
    /* border-radius: 10px; */
    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
`;

export const QuoteGeneratorInnerCon = styled.div`
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    width: 100%;
    
`;

export const QuoteGeneratorTitle = styled.div`
    font-family: var(--font);
    font-size: 50px;
    text-align: center;
    color: var(--gray);
    padding: 0px 20px 0px 20px;
    position: relative;
    background-color: transparent;

    /* media query */
    @media only screen and (max-width: 600px) {
        font-size: 30px;
    }
`;

export const QuoteGeneratorSubTitle = styled.div`
    color: var(--gray);
    font-family: var(--font);
    font-size: 35px;
    position: relative;
    width: 100%;
    text-align: center;
    padding: 0px 20px 0px 20px;
    background-color: transparent;
    @media only screen and (max-width: 600px) {
        font-size: 25px;
    }
`;

export const GenerateQuoteButton = styled.div`
    height: 100px;
    width: 300px;
    border: 2px solid darkgrey;
    border-radius: 20px;
    
    margin-top: 20px;
    position: relative;
    transition: 0.2s all ease-in-out;
    cursor: pointer;
    top: 20px;
    margin: auto;
    transform-origin: center;
    
    background-color: transparent;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    &:hover {
        filter: brightness(1);
        transition: 0.2s all ease-in-out;
        transform: scale(1.05);

        transform-origin: center;
    }
`;

export const GenerateQuoteButtonText = styled.div`
    color: white;
    font-family: var(--font);
    font-size: 35px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    width: 100%;
    text-align: center;
    background-color: transparent;
`;

export const QuoteGeneratorModalCon = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 70vh;
    /* box-shadow: 24; */
    /* transition: 0.2s all ease-in-out; */

    background-color: transparent;
/* 
    box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
    -webkit-backdrop-filter: blur( 20px );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border-radius: 10px;
    border: 1px solid rgba( 255,255,255,0.18 ); */

    &:focus {
      outline: none !important;
    }
`;

export const QuoteGeneratorModalInnerCon = styled.div`
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: relative;
    height: 300px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ModalCircularProgress = styled(CircularProgress)`
    color: white !important;
    stroke-linecap: round;
    position: relative;
    /* to account for the larger element pushing left */
    margin-left: -55px;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent !important;
`;