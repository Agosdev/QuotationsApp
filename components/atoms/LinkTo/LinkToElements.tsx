import Link from "next/link";
import styled from "styled-components";

interface ILinkTO {
    size?: number;
    black?: boolean;
  }

export const LinkTO = styled(Link)<ILinkTO>(
    ({ size, black }) => `
    color: ${black ? 'black' : 'white'};
    font-family: var(--font);
    font-size: ${size ? `${size}` : '20px'};
    background-color: transparent;
    text-decoration: none;
    text-align: center;
    margin: 15px;
    cursor: pointer;
    

    &:hover {
        color: var(--gray);
    }
`);