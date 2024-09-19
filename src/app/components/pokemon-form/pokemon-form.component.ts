import { LitElement, css, html } from "lit";    
import { customElement, property } from "lit/decorators.js";

import "./../../components/basic/input/input.component";
import "./../../components/basic/select/select.component";
import "./../../components/basic/button/button.component";
import { Evolution, NewEvolution } from "../../interfaces/evolution.interface";

const POKEMON_TYPES: string[] = ["", "Grass", "Fire", "Water", "Electric", "Electric", "Normal", "Rock", "Bug", "Ghost", "Fighting", "Psychic", "Dragon", "Ice", "Dark", "Steel", "Fairy"];

@customElement("pokemon-form")
export class PokemonForm extends LitElement {
    @property()
    idPokemon: string = "";

    @property()
    namePokemon: string = "";

    @property()
    typePokemon: string = "";

    @property()
    typePokemon1: string = "";

    @property()
    typePokemon2: string = "";

    @property()
    pokemonSelected: Evolution = {
        name: "",
        type: "",
        image: ""
    };
    

    newPokemonForm: NewEvolution = {
        name: "",
        type1: "",
        type2: "",
        image: "",
    };

    newPokemon: Evolution = {
        name: "",
        type: "",
        image: ""
    };


    static get styles() {
        return css`
        .form-add-pokemon{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
            width: 50%;
            margin: 0 auto;

        }

        .input-component{
            margin-bottom: 10px;
            width: 300px;

            
            }

            .title-form{
                text-align: center;
                margin-bottom: 20px;
            }

            .btns-form{
                display: flex;
                justify-content: space-between;
                width: 300px;
            }

        `;
    }   

    btnCancel(){
        this.dispatchEvent(new CustomEvent('cancel'));
    }

    handleCancel() {
        this.dispatchEvent(new CustomEvent('cancel'));
    }

    btnAddPokemon(){

        console.log(this.pokemonSelected);
        this.dispatchEvent(new CustomEvent("pokemon-change", { detail: this.pokemonSelected }));
    }

    handleInputChange(event: CustomEvent) {
        const valorIngresado = event.detail;
        this.pokemonSelected.name = valorIngresado;
      }

      handleInputChangeType(event: CustomEvent) {
        const valorIngresado = event.detail;
        this.pokemonSelected.type = valorIngresado;
      }

    render() {
        return html`
        <div class="title-form">
            <h1>Editar Pokemon: ${this.pokemonSelected.name}</h1>
        </div>
         <div class="form-add-pokemon">

            <input-component class="input-component" label="Nombre del pokemon" name="namePokemon" value="${this.pokemonSelected.name}" @input-change=${this.handleInputChange}></input-component>

            <input-component class="input-component" label="Nombre del pokemon" name="typePokemon" value="${this.pokemonSelected.type}" @input-change=${this.handleInputChangeType}></input-component>
            <div class="btns-form">
                <button-component @click=${this.btnAddPokemon} label="Editar"></button-component>
                <button-component class="red" @click=${this.btnCancel} label="Cancelar" ></button-component>
            </div>
         </div>
        `;
    }

}