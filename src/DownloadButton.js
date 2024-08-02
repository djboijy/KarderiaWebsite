import React from 'react';
import karderiapresentation from './Karderia.pptx';


const DownloadButton = () => {
    const handleDownload = () => {
 
        const link = document.createElement('a');
        link.href = karderiapresentation; 
        link.download = 'Karderia.pptx'; 
        link.click();
    };

    return (
        <button onClick={handleDownload} className="download-button">
            Karderia Presentation(on Ukrainian)
        </button>
    );
};

export default DownloadButton;