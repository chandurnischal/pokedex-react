import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import TypeList from "./TypeList";

const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);


    const handleClick = () =>{
        setIsFlipped(!isFlipped);
    }


    const imageName = props.url.substring(props.url.lastIndexOf('/') + 1);
    const localURL = `./src/assets/images/${imageName}`;

    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 bw2 grow shadow-5">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div
                    onClick={ handleClick }
                >
                    <h4>#{ props.id }</h4>
                    <img src= { localURL } alt = 'Image not available' />
                    <h2>{ props.name }</h2>
                    <TypeList typeList={ props.type }/>
                </div>
                <div
                    onClick={handleClick}
                >
                    <h3 style={{ color: '#007bff' }}>Total: {props.total}</h3>
                    <h3 style={{ color: '#28a745' }}>HP: {props.hp}</h3>
                    <h3 style={{ color: '#dc3545' }}>Attack: {props.attack}</h3>
                    <h3 style={{ color: '#fd7e14' }}>Defence: {props.defence}</h3>
                    <h3 style={{ color: '#6f42c1' }}>Special Attack: {props.specialAttack}</h3>
                    <h3 style={{ color: '#e83e8c' }}>Special Defence: {props.specialDefence}</h3>
                    <h3 style={{ color: '#ffc107' }}>Speed: {props.speed}</h3>
                </div>
            </ReactCardFlip>
        </div>
    );
};

export default Card;