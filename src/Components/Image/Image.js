import React from 'react';
import "./Image.css";
import amywong from "./images/amywong.png";
import bender from "./images/bender.png";
import farnsworth from "./images/farnsworth.png";
import fry from "./images/fry.png";
import kif from "./images/kif.png";
import leela from "./images/leela.png";
import nibbler from "./images/nibbler.png";
import zoidberg from "./images/zoidberg.png";

const Image = props => (

    <span onClick={() => props.handleClick(props.id)}>
        <img className="zoom"
            src={amywong}
            alt={props.name}
            key={props.id}
        />
    </span>

);

export default Image;
