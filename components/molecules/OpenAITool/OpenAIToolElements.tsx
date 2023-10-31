import styled from "styled-components";

export const OpenAIToolCon = styled.div`
    top: 0%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: relative;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
`;

export const TextResultCon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    margin-top: 150px;
`;

export const TextResult = styled.div`
    color:  var(--white);
    background-color: transparent;
    text-align: left;
    width: 550px;
    height: 50px;
    margin-bottom: 30px;
`;

export const TextInput = styled.input`
    color:  var(--white);
    background-color: transparent;
    width: 500px;
    height: 50px;
    padding: 10px; 
    border: 2px solid var(--white);
    margin-top: 40px;
    margin-bottom: 30px;
`;

export const ResultCon = styled.div`
    background-color: transparent;
`;

export const Button = styled.button`
    color:  var(--white);
    background-color: transparent;
    border: 2px solid var(--white);
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-left: 10px;
`;