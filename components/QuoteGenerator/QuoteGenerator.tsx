import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Box, CircularProgress } from "@mui/material";

export const BackgroundImage = styled(Image)`
  position: relative;
  z-index: 1;
  margin-left: -10px;
  margin-top: -10px;
`;

export const FooterCon = styled.div`
  width: 100vw;
  height: 30px;
  text-align: center;
  font-family: 'Source Code Pro', monospace;
  font-size: 15px;
  position: absolute;
  bottom: 0;
  color: #3f3f3f;
  z-index: 999999;
`;

export const RedSpan = styled.span`
    color: red;
`;

export const FooterLink = styled(Link)`
  color: #3f3f3f;
`;

export const QuoteGeneratorCon = styled.div`
    min-height: 350px;
    min-width: 350px;
    height: 70vh;
    width: 70vw;
    /* border: 2px solid #ffffff22; */
    border-radius: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    z-index: 2;

    /* background: rgba( 0, 0, 70, 0.3 ); */
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
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
    font-family: 'Permanent Marker', cursive;
    font-size: 50px;
    text-align: center;
    color: white;
    padding: 0px 20px 0px 20px;
    position: relative;
    /* media query */
    @media only screen and (max-width: 600px) {
        font-size: 30px;
    }
`;

export const GenerateQuoteButton = styled.div`
    height: 100px;
    width: 300px;
    margin-top: 20px;
    cursor: pointer;
    top: 20px;
    margin: auto;
`;

export const GenerateQuoteButtonText = styled.div`
    color: '#5cfdf5';
    font-family: 'Princess Sofia', cursive;
    font-size: 35px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    width: 100%;
    text-align: center;
`;

export const QuoteGeneratorModalCon = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 70vh;
    box-shadow: 24;
    transition: 0.2s all ease-in-out;

    background: rgb(193 193 255 / 19%);
    box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
    -webkit-backdrop-filter: blur( 20px );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border-radius: 10px;
    border: 1px solid rgba( 255,255,255,0.18 );

    &:focus {
      outline: none !important;
    }
`;

export const QuoteGeneratorModalInnerCon = styled.div`
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: relative;
`;

export const ModalCircularProgress = styled(CircularProgress)`
    color: white !important;
    stroke-linecap: round;
    position: relative;
    /* to account for the larger element pushing left */
    margin-left: -55px;
    left: 50%;
    transform: translateX(-50%);
`;