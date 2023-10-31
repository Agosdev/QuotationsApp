import React from "react";
import { BackgroundCon } from "@/styles/globals";
import LinkTo from "@/components/atoms/LinkTo/LinkTo";

const index = () => {

  return (
    <BackgroundCon style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}> 
            <div style={{color: 'black', padding: '100px', borderRadius: '50% 50% 50% 50%'}}>
            <LinkTo  text='Go to my LinkedIN' page='https://www.linkedin.com/in/web3-react/' target='_blank'/>
            <div style={{height: '100px', width: '1px'}} />
            <LinkTo text='Send me and email' page={`mailto:${process.env.NEXT_PUBLIC_GMAIL_EMAIL_ADDRESS}`} target='_blank'/>
            </div>
    </BackgroundCon> 
  );
};

export default index;
