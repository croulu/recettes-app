import React, {Component} from 'react';
import AjouterRecette from "./AjouterRecette";
import AdminForm from "./AdminForm";

class Admin extends Component {
    render() {
        const {recettes, ajouterRecette, modifierRecette, chargerExemple, supprimerRecette} = this.props
        return (
            <div className="cards">
                <AjouterRecette ajouterRecette={ajouterRecette}/>
                {
                    Object.keys(recettes)
                        .map(key => <AdminForm
                            key={key}
                            id={key}
                            modifierRecette={modifierRecette}
                            supprimerRecette={supprimerRecette}
                            recettes={recettes}
                        ></AdminForm>)
                }
                <footer>
                    <button onClick={chargerExemple}>Remplir</button>
                </footer>
            </div>
        );
    }
}

export default Admin;
