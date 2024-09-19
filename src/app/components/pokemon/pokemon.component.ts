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
                margin-bottom: 10px;
            }
            
            .card{
                height: 260px;
                width: 290px;
                padding: 10px 25px;
                border-radius: 25px;
                box-shadow: 1px 1px 7px -1px rgb(0 0 0 / 67%);
            }

            .card.pointer{
                cursor: pointer;
            }

            .card_image{
                text-align: center;
                display: flex;
                align-items: center;
            }

            .card_image img{
                max-width: 130px;    
            }

            .card_image img:hover{
                transform: scale(1.2);
                transition: 0.5s;
            }

            .card_body{
                display: flex;
                justify-content: space-around;
                min-height: 180px;
            }

            .grass{
                background-color: #71C671;
            }

            .fire{
                background-color: #F08030;
            }

            .water{
                background-color: #6890F0;
            }
            .electric{
                background-color: #F8D030;
            }

            .normal{
                background-color: #c48a8a;
            }   

            .ghost{
                background-color: #66b;
            }

            .fighting{
                background-color: #b54;
            }

            .rock{
                background-color: #ba6;
            }

            .psychic{
                background-color: #f59;
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
        if (!this.pokemon.evolutions) return false;
        return this.pokemon.evolutions.length > 0;
    }

    getMainTypeClass(types: string) {
        let typesArray = types.split("/");
        return typesArray[0].toLowerCase();
    }

    render() {
        return html`
            <div class="card ${this.addPointer()} ${this.getMainTypeClass(this.pokemon.type)}" @click=${this._onClick}>
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