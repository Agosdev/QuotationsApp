import Link from "next/link";
import React from "react";
import { LinkTO } from "./LinkToElements";

interface ILinkTo {
  text: string;
  page: string;
}

const LinkTo = ({text, page}: ILinkTo) => {
  return (
       <LinkTO href={page}>{text}</LinkTO>
  );
};

export default LinkTo;
