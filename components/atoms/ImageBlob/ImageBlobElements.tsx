import styled from "styled-components";

export const ImageBlobCon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    text-align: center;
    top: 0px;
    transition: 0.3s all ease-in-out;
    margin: auto;
    height: 100px;
    z-index: 99999;
    background-color: transparent;

    &:hover {
        transform: scale(3.8);
        z-index: 99999;
        transition: 0.3s ease-in-out;
        box-shadow: 0 0 80px 90px rgba(0,0,0,0.6);
        /* height: 100px; */
        @media only screen and (max-width: 800px) {
            transform: scale(2.8);
            z-index: 99999;
            transition: 0.3s all ease-in-out;
            box-shadow: 0 0 80px 90px rgba(0,0,0,0.6);
        }
        @media only screen and (max-width: 600px) {
            transform: scale(1.8);
            z-index: 99999;
            transition: 0.3s all ease-in-out;
            box-shadow: 0 0 80px 90px rgba(0,0,0,0.6);
        }
    } 
`;
