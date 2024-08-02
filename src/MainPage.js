import React from 'react';
import './PixelatedHeader.css';

const MainPage = () => {

    const Header = () => {
        const headerStyle = {
            color: "white",
            padding: "10px",
            fontFamily: "Sans-Serif",
            float: "center",
            textAlign: "center"
        };

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