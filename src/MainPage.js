import React from 'react';
import './PixelatedHeader.css';

const MainPage = () => {

    const Header = () => {

        return (
            <div>
                <header className="pixelated-header">
                    <h1>Karderia</h1>
                </header>
            </div>
        );
    };

    return (
        <div>
            <Header />
        </div>
    );
};

export default MainPage;