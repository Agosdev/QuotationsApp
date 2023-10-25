import Link from "next/link";
import styled from "styled-components";

export const LinkTO = styled(Link)`
    color: var(--white);
    font-family: var(--font);
    font-size: 20px;
    background-color: transparent;
    text-decoration: none;
    text-align: center;
    margin: 15px;

    &:hover {
        color: var(--gray);
    }
`;
