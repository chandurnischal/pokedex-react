import React from "react";
import Card from "./Card"


const CardList = ({ pokedex }) => {
    const cardComponent = pokedex.map((pokemon, i) => {
        return (
            <Card
                key={i}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                url={pokemon.url}
                total={pokemon.total}
                hp={pokemon.hp}
                attack={pokemon.attack}
                defence={pokemon.defence}
                specialAttack={pokemon.special_attack}
                specialDefence={pokemon.special_defence}
                speed={pokemon.speed}
            />
        )
    })


    return (
        <div>
            {cardComponent}
        </div>
    )
}


export default CardList;
