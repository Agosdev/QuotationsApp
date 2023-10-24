import React, { useState, useEffect } from 'react'

// Material UI Imports
import { Backdrop, Fade, Modal } from '@mui/material'
import { ModalCircularProgress, QuoteGeneratorModalCon, QuoteGeneratorModalInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from './QuoteGeneratorElements';
import { ImageBlobCon } from '@/components/animations/AnimationElements';
import ImageBlob from '@/components/animations/ImageBlob';
import AnimatedDownloadButton from '@/components/animations/AnimatedDownloadButton';

interface QuoteGeneratorModalProps {
    open: boolean,
    close: () => void;
    setProcessingQuote: (processingQuote: boolean) => void;
    setQuoteReceived: React.Dispatch<React.SetStateAction<String | null>>;
    processingQuote: boolean;
    quoteReceived: String | null;
}

const style = {

};

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
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <QuoteGeneratorModalCon sx={style}>
                    <QuoteGeneratorModalInnerCon>
                        {/* State #1: Processing request of quote + quote state is empty */}
                        {(processingQuote === true && quoteReceived === null) &&
                            <>
                                <ModalCircularProgress
                                    size={"8rem"}
                                    thickness={2.5}
                                />
                                <QuoteGeneratorTitle>
                                    Creating your quote...
                                </QuoteGeneratorTitle>
                                <QuoteGeneratorSubTitle style={{marginTop: "20px"}}>
                                    {wiseDevQuote}
                                    <br></br>
                                    {wiseDevQuoteAuthor}
                                </QuoteGeneratorSubTitle>
                            </>
                         }

                        {/* State #2: Quote state fulfilled */}
                        {quoteReceived !== null && 
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
                                <AnimatedDownloadButton
                                    handleDownload={handleDownload}
                                />
                            </>
                        }


                    </QuoteGeneratorModalInnerCon>
                </QuoteGeneratorModalCon>

            </Fade>

        </Modal>
    )
}

export default QuoteGeneratorModal