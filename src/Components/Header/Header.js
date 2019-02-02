import React from 'react';
import "./Header.css";

const Header = (props) => (

        <div className="header">
            <div className="goodNews" id="goodNews">
                <h2 >Good news, everyone!</h2>
                <p>Try to click on each character only once. 
                    <br></br>
                    If you click on one twice, the score resets.</p>
                    <br></br>
                    <div className="score" id="score">Score: {props.score}</div>
            </div>

        </div>

);

export default Header;
