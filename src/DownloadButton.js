import React from 'react';
import karderiapresentation from './Karderia.pptx';
import karderiaGame from "./Karderia.zip"


const DownloadButton = () => {
    const handleDownload = () => {
 
        const link = document.createElement('a');
        link.href = karderiapresentation; 
        link.download = 'Karderia.pptx'; 
        link.click();
    };
    const handleGameDownload = () => {

        const link = document.createElement('a');
        link.href = karderiaGame;
        link.download = 'Karderia.zip';
        link.click();
    };

    return (
        <button onClick={handleGameDownload} className="download-button">
            Karderia Game!!! (.zip archive, for PC only)
        </button>,
        <button onClick={handleDownload} className="download-button">
            Karderia Presentation(on Ukrainian) - Not Done At All
        </button>
    );
};

export default DownloadButton;