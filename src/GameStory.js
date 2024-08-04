// src/GameStory.js
import React from 'react';
import './GameStoryAssets.css';
import Image1 from './assets/karderiaImage1.png';
import Image2 from './assets/karderiaImage2.png';
import Image3 from './assets/karderiaImage3.png';
import Image4 from './assets/karderiaImage4.png';
import Image5 from './assets/karderiaImage5.png';
import Image6 from './assets/karderiaImage6.png';
import Image7 from './assets/karderiaImage7.png';
import Image8 from './assets/karderiaImage8.png';
import Image9 from './assets/karderiaImage9.png';
import Image10 from './assets/karderiaImage10.png';
import Image11 from './assets/karderiaImage11.png';
import Image12 from './assets/karderiaImage12.png';
import Image13 from './assets/karderiaImage13.png';
import Image14 from './assets/karderiaImage14.png';
import Image15 from './assets/karderiaImage15.png';
import Image16 from './assets/karderiaImage16.png';
import Image17 from './assets/karderiaImage17.png';

const GameStory = () => {
    return (
        
        <div>
            <div>
                <header className="pixelated-header">
                    <h1>Game Story</h1>
                </header>
            </div>
            <p className="SmallText">
                When I started making this game, I planned it to be something like collection card
                game on C#. But after some time I decided to make it something similar to RPG.
                I started with making the cards: it was not really easy. But after 2 days I had a
                working cards being drawn. After that, I made a first-move chooser after and the 
                field between the cards. There were 2 lists: first for player cards and second for 
                AI cards. The cards were generated randomly, like it is now. I added an enum too:
                that's for card types. Next I added move handling: each move you and AI are given 
                +10 mana and the moves are changing. I made separate classes for both AI and the player,
                featuring current mana. For player I added the "CharacterName" variable, which is for 
                now handling the name changing system. To be honest I didn't plan to do anything with it
                before, but now it's all set. The next step was rewriting the battle field and card displaying
                classes: it was too rushed. I learned lots of new stuff while doing it. 

                <p className="marginTextSpace">
                    Coding the main game progress wasn't hard, but wasn't easy. First I coded the system for
                choosing cards: ai chooses them randomly for the move and you choose it manually. It was long
                to bugfix it, but it worked. Next I made sure it's all displaying in Console, and it was cool.
                </p>
                The cards took damage, the next step was making a win/lose system. I took a little time and I did
                that in a fastest way. The player loses when he lost all of his cards, AI too. Next I made a
                special card choosing system for AI, details are on the screenshots below.
                <p className="marginTextSpace">
                After some time I added The Journal for making console more beautiful, mana checks. Cards were
                already colorful then, the field too. Last steps were making player and AI able to get cards from
                the deck and more visual designing/bug fixing.
                </p>
            </p> <br/>
            <p className="MediumText">
                Here are some footage screenshots from the game's code!
            </p> <br/> <br/>
            <img src={Image1} alt="A file displaying something from my game!" className="imageType1" />
            <img src={Image2} alt="A file displaying something from my game!" className="imageType2" />
            <img src={Image3} alt="A file displaying something from my game!" className="imageType1" />
            <img src={Image4} alt="A file displaying something from my game!" className="imageType2" />
            <img src={Image5} alt="A file displaying something from my game!" className="imageType1" />
            <img src={Image6} alt="A file displaying something from my game!" className="imageType2" />
            <img src={Image7} alt="A file displaying something from my game!" className="imageType1" />
            <img src={Image8} alt="A file displaying something from my game!" className="imageType2" />
            <img src={Image9} alt="A file displaying something from my game!" className="imageType1" />
            <img src={Image10} alt="A file displaying something from my game!" className="imageType2" />
            <img src={Image11} alt="A file displaying something from my game!" className="imageType1" />
            <img src={Image12} alt="A file displaying something from my game!" className="imageType2" />
            <img src={Image13} alt="A file displaying something from my game!" className="imageType1" />
            <img src={Image14} alt="A file displaying something from my game!" className="imageType2" />
            <img src={Image15} alt="A file displaying something from my game!" className="imageType1" />
            <img src={Image16} alt="A file displaying something from my game!" className="imageType2" />
            <img src={Image17} alt="A file displaying something from my game!" className="imageType1" />
        </div>
    );
};

export default GameStory;