import React from 'react';

const Card = ({ details }) => {
    const formatIngredients = details.ingredients
        .split(",")
        .map(item => <li key={item}>{item}</li>)

    const formatInstructions = details.instructions
        .split("\n")
        .map(item => <li key={item}>{item}</li>)

    return (
        <div className='card'>`
            <div className='image'>
                <img src={require(`../img/${details.image}`).default} alt={details.nom} />
            </div>
            <div className='recette'>
                <h2>{details.nom}</h2>
                <ul className="liste-ingredients">
                    {formatIngredients}
                </ul>
                <ol className="liste-instructions">
                    {formatInstructions}
                </ol>
            </div>
        </div>
    );
};

export default Card;
