import React, { useState, useEffect } from 'react'

// Material UI Imports
import { Backdrop, Fade, Modal } from '@mui/material'
import { QuoteGeneratorModalCon, QuoteGeneratorModalInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from './QuoteGeneratorModalElements';
import { ImageBlobCon } from '@/components/atoms/ImageBlob/ImageBlobElements';
import ImageBlob from '@/components/atoms/ImageBlob';
 import GenericButton from '@/components/atoms/GenericButton';
import LinkTo from '@/components/atoms/LinkTo';
import OpenAITool from '../OpenAITool';

interface QuoteGeneratorModalProps {
    open: boolean,
    close: () => void;
    setProcessingQuote: (processingQuote: boolean) => void;
    setQuoteReceived: React.Dispatch<React.SetStateAction<string | null>>;
    processingQuote: boolean;
    quoteReceived: string | null;
}

const QuoteGeneratorModal = ({
    open, 
    close,
    setProcessingQuote,
    setQuoteReceived,
    processingQuote,
    quoteReceived,
}: QuoteGeneratorModalProps) => {

    const wiseDevQuote = '"If you can center a div, anything is possible."';
    const wiseDevQuoteAuthor = "- a wise senior software engineer";

    const [blobUrl, setBlobUrl] = useState<string | null>(null);
    const [step3Visible, setStep3Visible] = useState<boolean>(false);
    

    // Function: Handling the download of quote card
    const handleDownload = () => {
        const link = document.createElement('a');
        if (typeof blobUrl === 'string') {
            link.href = blobUrl;
            link.download = 'quote.png';
            link.click();
        }
    };

    // Function: Handle the receiving of quote card
    useEffect(() => {
        if (quoteReceived) {
            const binaryData = Buffer.from(quoteReceived, 'base64');
            const blob = new Blob([binaryData], { type: 'image/png' });
            const blobUrlGenerated = URL.createObjectURL(blob);
            console.log(blobUrlGenerated);
            setBlobUrl(blobUrlGenerated);

            return () => {
                URL.revokeObjectURL(blobUrlGenerated);
            }
        }
    }, [quoteReceived])

    return (
        <Modal
            id="QuoteGeneratorModal"
            aria-labelledby="spring-modal-quotegeneratormodal"
            aria-describedby="spring-modal-opens-and-closes-quote-generator"
            open={open}
            onClose={close}
            closeAfterTransition
            sx={{ background: 'transparent'}}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <QuoteGeneratorModalCon sx={{}}>
                    <QuoteGeneratorModalInnerCon>
                        {/* State #1: Processing request of quote + quote state is empty */}
                        {(processingQuote === true && quoteReceived === null) &&
                            <>
                                <QuoteGeneratorTitle>
                                    Searching a quote for you...
                                </QuoteGeneratorTitle>
                                <QuoteGeneratorSubTitle style={{marginTop: "20px"}}>
                                    {wiseDevQuote}
                                    <br></br>
                                    {wiseDevQuoteAuthor}
                                </QuoteGeneratorSubTitle>
                            </>
                         }

                        {/* State #2: Quote state fulfilled */}
                        {quoteReceived !== null && !step3Visible &&
                            <>
                                    <QuoteGeneratorTitle>
                                    Look at a preview
                                    </QuoteGeneratorTitle>
                                    <ImageBlobCon>
                                        <ImageBlob
                                            quoteReceived={quoteReceived}
                                            blobUrl={blobUrl}
                                        />
                                    </ImageBlobCon>
                                    <GenericButton text={'Download card'} onClick={() => handleDownload()} /> 
                                <QuoteGeneratorModalInnerCon> 
                                    <QuoteGeneratorSubTitle style={{cursor: 'pointer'}} onClick={() => setStep3Visible(true)} >
                                        I want to know more about this quote
                                    </QuoteGeneratorSubTitle>
                                </QuoteGeneratorModalInnerCon>
                             </>
                        }

                       {/* State #3: Use Open AI Tool */}
                        {quoteReceived !== null && step3Visible &&
                            <>
                                <LinkTo page='/contactMe' text='Write the developer' /> 
                                <QuoteGeneratorTitle>
                                   Use our Open AI Tools
                                </QuoteGeneratorTitle>
                                <OpenAITool />
                             </>
                        }
                     </QuoteGeneratorModalInnerCon>
                </QuoteGeneratorModalCon>

            </Fade>

        </Modal>
    )
}

export default QuoteGeneratorModal