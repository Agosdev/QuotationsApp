import styled from "styled-components";

export const ImageBlobCon = styled.div`
    position: relative;
    text-align: center;
    top: 10px;
    margin-top: 20px;
    transition: 0.3s all ease-in-out;
    width: fit-content;
    margin: auto;
    height: 100px;
    z-index: 99999;
    
    &:hover {
        transform: scale(4.8);
        z-index: 99999;
        transition: 0.3s ease-in-out;
        box-shadow: 0 0 80px 90px rgba(0,0,0,0.6);
        /* height: 100px; */
        @media only screen and (max-width: 800px) {
            transform: scale(3.8);
            z-index: 99999;
            transition: 0.3s all ease-in-out;
            box-shadow: 0 0 80px 90px rgba(0,0,0,0.6);
        }
        @media only screen and (max-width: 600px) {
            transform: scale(2.8);
            z-index: 99999;
            transition: 0.3s all ease-in-out;
            box-shadow: 0 0 80px 90px rgba(0,0,0,0.6);
        }
    } 
  
`;

export const DownloadQuoteCardCon = styled.div`
    border: 2px solid darkgrey;
    border-radius: 20px;
    position: relative;
    bottom: 0;
    width: 400px;
    height: 60px;
    cursor: pointer;
    margin-top: 50px;
    transform: scale(0.7);
    width: calc(70vw/3);
    margin:  auto;
    font-family: var(--font);
    
    &:hover {
        background: rgb(193 193 255 / 3%);
        box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
        -webkit-backdrop-filter: blur( 20px );
        backdrop-filter: blur( 20px );
        -webkit-backdrop-filter: blur( 20px );
    }
`;


export const DownloadQuoteCardConText = styled.div`
    color: var(--gray);
    background-color: transparent;
    font-size: 35px;
    text-align: center;
    
    @media only screen and (max-width: 600px) {
        font-size: 25px;
    }
`;