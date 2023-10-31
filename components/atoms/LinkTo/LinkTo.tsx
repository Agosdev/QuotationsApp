import React from "react";
import { LinkTO } from "./LinkToElements";

interface ILinkTo {
  text: string;
  page: string;
  target?: string;
}

const LinkTo = ({text, page, target}: ILinkTo) => {
  return (
       <LinkTO href={page} target={target}>{text}</LinkTO>
  );
};

export default LinkTo;
