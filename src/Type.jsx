import React from "react";

const typeColors = {
    Normal: '#A8A878',   // Light Gray
    Fire: '#F08030',     // Dark Orange
    Water: '#6890F0',    // Light Blue
    Electric: '#F8D030', // Light Yellow
    Grass: '#78C850',    // Light Green
    Ice: '#98D8D8',      // Light Cyan
    Fighting: '#C03028', // Red
    Poison: '#A040A0',   // Purple
    Ground: '#E0C068',   // Light Brown
    Flying: '#A890F0',   // Light Purple
    Psychic: '#F85888',  // Pink
    Bug: '#A8B820',      // Olive Green
    Rock: '#B8A038',     // Brown
    Ghost: '#705898',    // Dark Purple
    Dragon: '#7038F8',   // Purple
    Dark: '#705848',     // Brown
    Steel: '#B8B8D0',    // Light Gray
    Fairy: '#EE99AC',    // Light Pink
  };

const Type = ({ type }) => {

    const backgroundColor = typeColors[type] || "#A8A878";

    const typeStyle = {
        backgroundColor,
        padding: '10px',
        borderRadius: '5px',
        color: '#fff',
        display: 'inline-block',
        textTransform: 'capitalize',
    };


    return (
        <div style={ typeStyle }>
            { type }
        </div>
    )
}

export default Type;