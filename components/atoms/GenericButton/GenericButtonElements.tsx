import styled from "styled-components";

export const ButtonCon = styled.div`
    min-width: 350px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    z-index: 2;
`;

export const ButtonInnerCon = styled.div`
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    width: 100%;
    background-color: transparent;
`;

export const ButtonTitle = styled.div`
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

export const ButtonSubTitle = styled.div`
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

export const Button = styled.div`
    height: 80px;
    width: 200px;
    border: 2px solid darkgrey;
    border-radius: 20px;
    
    margin-top: 20px;
    position: relative;
    transition: 0.2s all ease-in-out;
    cursor: pointer;
    top: 180px;
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

export const ButtonText = styled.div`
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
