import React from 'react'
import Image from 'next/image'

interface ImageBlobProps {
    quoteReceived: String | null;
    blobUrl: string | null;
}

const ImageBlob = ({ 
    quoteReceived, 
    blobUrl 
}: ImageBlobProps) => {

    if (!blobUrl) {
        return null;
    }

    return (
        <Image src={blobUrl} alt="Generated quote card" width={200} height={150} />
    )
}

export default ImageBlob