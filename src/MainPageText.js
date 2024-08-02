import React from 'react';
import './MainPageText.css';

const MainPageText = () => {
    
    const NormalPageSmallText = () => 
    {
        const TextStyle = {
            color: "black",
            textAlign: "center"
        }
        return (
            <p style={TextStyle}>
                Karderia is a game for those who love minimalism. In this game you are given 3 
                random cards, each having a unique type and skills. First move is being decided
                randomly. For now, the game can be played against the AI only. When it's your
                move, join the battle by placing a card on the table or getting one more
                unique card from the deck. AI also does the same, join the battle! Each attack
                costs specific mana per card, so watch out and build a strategy! If you don't
                have enough mana for all of your current cards, you skip your turn. Each game
                gives you some XP, become a 100-level pro and win all the games! Achievements for
                your games are coming soon, there might also be a shop and leaderboards!
            </p>
            
        );    
    }
    
    return (
        <div>
            <p className="SmallText">
                <NormalPageSmallText />
            </p>
            <br/><br/><br/>
            <div className="MediumText">Good luck! Click the buttons above to read more about the game.</div>
        </div>
    );
    
};

export default MainPageText;
