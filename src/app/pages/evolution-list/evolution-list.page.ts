import { LitElement, css, html } from "lit";    
import { customElement, property } from "lit/decorators.js";

import "./../../shared/header/header.component";

import "./../../services/evolution-data.service";
import "./../../components/pokemon-evolution/pokemon-evolution.component";
import "./../../components/basic/button/button.component";
import "./../../components/pokemon-form/pokemon-form.component";
import { Evolution } from "../../interfaces/evolution.interface";

@customElement("evolution-list-page")
export class EvolutionListPage extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }

            .evolution-page_button{
                margin: 30px auto;
                text-align: center;
            }

            .btn-add-content{
                margin: 30px auto;
                text-align: center;
            }
        `;
    }



    @property()
    idPokemon?: string;

    @property() 
    showForm: boolean = false; 

    @property()
    evolutionSelected: Evolution = {
        name: "",
        type: "",
        image: ""
    };

    addPokemon(){
        this.showForm = true;
    }



    handleEdit(event: CustomEvent) {
        const value = event.detail;
        this.evolutionSelected = value;
    }

    changePokemon(event: CustomEvent){
        console.log('changePokemon');
        const data = event.detail;
        
    }



    render() {
        return html`
            <header-component title="Evoluciones"></header-component>
                <evolution-data idPokemon=${this.idPokemon}>   
                    <div class="evolution-page_button">
                        <button-component @click=${() => window.history.back()} label="Volver"></button-component>
                    </div>
                    
                    <pokemon-evolution @edit=${this.handleEdit}></pokemon-evolution>

                    <div class="form-add-pokemon">
                        <pokemon-form @pokemon-change=${this.changePokemon} .pokemonSelected=${this.evolutionSelected}></pokemon-form>
                    </div>

                </evolution-data>
            
        `;  
    }
}