import React from 'react';
import "./Header.css";

const Header = (props) => (

        <div className="header">

            <h2 >Good news, everyone!</h2>
            <p>Try to click on each character only once. 
                <br></br>
                If you click on it twice, the score resets.
                <br></br>
                If the score reaches 8, you win a prize!
            </p>
                <br></br>
            <div className="score">Score: {props.score}</div>

        </div>

);

export default Header;
