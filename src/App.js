// src/App.js
import React, { useState } from 'react';
import './App.css';
import MainPage from './MainPage';
import MainPageText from './MainPageText';
import AboutUs from './AboutUs';
import Download from './Download';
import GameStory from './GameStory';
import Other from './Other';
import Credits from "./Credits";

function App() {
    const [currentPage, setCurrentPage] = useState('AboutUs'); // Default page


    const renderPage = () => {
        switch (currentPage) {
            case 'AboutUs':
                return <AboutUs />;
            case 'Download':
                return <Download />;
            case 'GameStory':
                return <GameStory />;
            case 'Other':
                return <Other />;
            case 'Credits':
                return <Credits />
            default:
                return <AboutUs />;
        }
    };

    return (
        <div className="app-container">
            <div className="App">
                <div className="button-container">
                    <button className="button button1" onClick={() => setCurrentPage('AboutUs')}>About Us</button>
                    <button className="button button2" onClick={() => setCurrentPage('Download')}>Download</button>
                    <button className="button button3" onClick={() => setCurrentPage('GameStory')}>Game Story</button>
                    <button className="button button4" onClick={() => setCurrentPage('Other')}>Other</button>
                    <button className="button button5" onClick={() => setCurrentPage('Credits')}>Credits</button>
                </div>
                <br /><br /><br /><br />
                {renderPage()} {}
                <div className="translation-container">
                    <div className="translation-text" onClick={() => console.log('Translate to English')}>Eng</div>
                    <div className="translation-text" onClick={() => console.log('Translate to Ukrainian')}>Ukr</div>
                </div>
            </div>
        </div>
    );
}

export default App;
