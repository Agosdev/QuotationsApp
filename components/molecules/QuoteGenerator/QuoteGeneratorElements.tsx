import styled from "styled-components";
import { Box, CircularProgress } from "@mui/material";

 export const BackgroundCon = styled.div`
 background-size: 400% 400%;
 height: 100vh;
 width: 100vw;
 background-color: transparent;
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

export const QuoteGeneratorModalCon = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 90vh;

    &:focus {
      outline: none !important;
    }
`;

export const QuoteGeneratorModalInnerCon = styled.div`
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: relative;
    height: 300px;
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
    background-color: transparent;
`;