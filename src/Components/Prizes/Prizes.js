import React, { Component } from 'react';
import buggalo from "./images/buggalo.png";
import clone from "./images/clone.jpg";
import jars from "./images/jars.png";
import ship from "./images/ship.jpg";
import "./Prizes.css";


class Prizes extends Component {

    state = {
        prizes: [
            {
                id: "buggalo",
                src: buggalo,
                alt: "buggalo",
                name: "a buggalo!"
            },
            {
                id: "clone",
                src: clone,
                alt: "clone",
                name: "a clone of your own!"
            },
            {
                id: "jars",
                src: jars,
                alt: "jars",
                name: "your head in a jar!"
            },
            {
                id: "ship",
                src: ship,
                alt: "ship",
                name: "the Planet Express Ship!"
            }
        ],
        selectedPrize: [
            {
                id: "",
                src: "",
                alt: "",
                name: ""
            }

        ]
    };

    componentDidMount() {
        let selectedPrize = this.state.prizes[Math.floor(Math.random()*this.state.prizes.length)];
        this.setState({
            id: selectedPrize.id,
            src: selectedPrize.src,
            alt: selectedPrize.alt,
            name: selectedPrize.name
        });
    }


    render() {
        return (

            <div className="winningPrize">
                <p className="prizesP">You won {this.state.name}</p>
                    <img 
                        className="prizeImg"
                        id={this.state.id}
                        src={this.state.src}
                        alt={this.state.alt}
                    />
                <br></br>
                <p className="prizesP">Click any character to play again!</p>
            </div>

        )
    }



}


export default Prizes;