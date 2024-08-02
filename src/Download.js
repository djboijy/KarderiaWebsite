// src/Download.js
import React from 'react';
import DownloadButton from './DownloadButton';

const Download = () => {
    return (
        <div>
            <div>
                <header className="pixelated-header">
                    <h1>Download</h1>
                </header>
            </div>
            <h1 className="MediumText">
                You can download everything useful for the game here! Cheers!
                <br/> <br/>
                <DownloadButton />
            </h1>
        </div>
    );
};

export default Download;