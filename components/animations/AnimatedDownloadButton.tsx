import React from 'react'
import {  DownloadQuoteCardCon, DownloadQuoteCardConText } from './AnimationElements'

interface AnimatedDownloadButtonProps {
    handleDownload: () => void;
}

const AnimatedDownloadButton = ({handleDownload}: AnimatedDownloadButtonProps) => {
  return (
    <DownloadQuoteCardCon 
        onClick={handleDownload}
    >
        <DownloadQuoteCardConText>
            Download card
        </DownloadQuoteCardConText>
    </DownloadQuoteCardCon>
  )
}

export default AnimatedDownloadButton