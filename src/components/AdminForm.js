import React from 'react';

const AdminForm = ({id: key, majRecette, recettes}) => {
    const recette = recettes[key]

    const handleChange = (event, key) => {
        const {name, value} = event.target
        const recette = recettes[key]
        recette[name] = value
        majRecette(key, recette)
    }

    return (
        <div className='card'>
            <form className='admin-form'>
                <input type='text' value={recette.nom} onChange={e => handleChange(e, key)} name='nom'
                       placeholder="Nom de la recette"/>
                <input type='text' value={recette.image} onChange={e => handleChange(e, key)} name='image'
                       placeholder="Nom de l'image"/>
                <textarea value={recette.ingredients} onChange={e => handleChange(e, key)} name='ingredients' rows='3'
                          placeholder="Liste des ingrédients"/>
                <textarea value={recette.instructions} onChange={e => handleChange(e, key)} name='instructions'
                          rows='15' placeholder="Liste des instructions"/>
            </form>
            <button>Supprimer</button>
        </div>
    );
};

export default AdminForm;
