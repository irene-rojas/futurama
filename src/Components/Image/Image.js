import React from 'react';
import "./Image.css";

const Image = props => (

    <span onClick={() => props.handleClick(props.id)}>
        <img className="zoom"
            src={props.image}
            alt={props.name}
            key={props.id}
        />
    </span>

);

export default Image;
