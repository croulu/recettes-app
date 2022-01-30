import React from 'react';

const Login = ({ authenticate }) => {
    return (
        <div className='login'>
            <h2>Connecte toi pour créer tes recettes !</h2>
            <button onclick={authenticate} className='facebook-button'>
                Me connecter avec Google
            </button>
        </div>
    );
};

export default Login;
