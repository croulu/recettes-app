import React from 'react';

const AdminForm = () => {
    return (
        <div className='card'>
            <form className='admin-form'>
                <input type='text' name='nom' placeholder='nom de la recette'/>
                <input type='text' name='image' placeholder="adresse de l'image"/>
                <textarea name='ingredients' rows='3' placeholder='Liste des ingrédients'/>
                <textarea name='instructions' rows='15' placeholder='Liste des instructions'/>
            </form>
            <button>Supprimer</button>
        </div>
    );
};

export default AdminForm;
