import Link from "next/link";
import styled from "styled-components";

export const FooterCon = styled.div`
  width: 100vw;
  height: 30px;
  font-family: 'Source Code Pro', monospace;
  font-size: 15px;
  position: absolute;
  left: 10;
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
