import styled from "styled-components";
import { Box } from "@mui/material";

export const QuoteGeneratorTitle = styled.div`
    font-family: var(--font);
    font-size: 50px;
    text-align: center;
    color: var(--white);
    padding: 0px 20px 0px 20px;
    position: relative;
    background-color: transparent;

    /* media query */
    @media only screen and (max-width: 600px) {
        font-size: 30px;
    }
`;

export const QuoteGeneratorSubTitle = styled.div`
    color: var(--white);
    font-family: var(--font);
    font-size: 35px;
    position: relative;
    width: 100%;
    text-align: center;
    padding: 0px 10px 0px 10px;
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
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

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
    background-color: transparent;
`;
 