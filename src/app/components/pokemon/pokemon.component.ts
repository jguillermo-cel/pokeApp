import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Evolution } from "../../interfaces/evolution.interface";

import "./../../components/basic/pokemon-type/pokemon-type.component";
import { Pokemon } from "../../interfaces/pokemon.interface";

@customElement("pokemon-component")
export class PokemonComponent extends LitElement {

    static get styles() {
        return css`
            
            :host {
                display: block;
            }

            .pokemon-type{
                margin-bottom: 5px;
            }
            
            .card{
                background-color: blue;
                max-width: 330px;
                max-height: 330px;
                padding: 10px;
            }

            .card.pointer{
                cursor: pointer;
            }

            .card_image{
                text-align: center;
            }

            .card_image img{
                max-width: 150px;    
            }
        `;
    }

    @property({ type: Object })
    pokemon: Pokemon = {
        id: 'abc',
        name: 'Bulbasaur',
        type: 'Grass/Poison',
        image: 'bulbasaur.png',
        evolutions: []
    };

    _onClick() {
        if (this.isRedirect()) {
            window.location.href = '/pokemon/' + this.pokemon.id;
        }

    }

    getTypes(types: string) {
        let typesArray = types.split("/");

        let htmlTypes = typesArray.map((type: string) => {
            return html`
                <pokemon-type class="pokemon-type" type="${type}"></pokemon-type>
            `;
        });

        return htmlTypes;
    }

    addPointer(): string {
        return this.isRedirect() ? "pointer" : "";
    }

    isRedirect(): boolean {
        return this.pokemon.evolutions.length > 0;
    }

    render() {
        return html`
            <div class="card ${this.addPointer()}" @click=${this._onClick}>
                <div class="card_title">
                    <h1>${this.pokemon.name}</h1>
                </div>
                <div class="card_body">
                    <div class="card_types">
                        ${this.getTypes(this.pokemon.type)}
                    </div>
                    <div class="card_image">
                        <img src="./src/assets/images/pokemons/${this.pokemon.image}" alt="${this.pokemon.name}">
                    </div>
                </div>
            </div>
        `;
    }
}