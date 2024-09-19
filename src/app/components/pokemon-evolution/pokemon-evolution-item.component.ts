import { LitElement, css, html } from "lit";    
import { customElement, property } from "lit/decorators.js";
import { Evolution } from "../../interfaces/evolution.interface";

import "./../../components/basic/pokemon-type/pokemon-type.component";

@customElement("pokemon-evolution-item")
export class PokemonEvolutionItem extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }

            .pokemon-evolution-item{
                max-width: 1000px;
                display : grid;
                grid-template-columns: 40% 60%;
                margin: 0 auto 50px;
                padding: 30px 50px;
                border-radius: 20px;
                box-shadow: 1px 1px 7px -1px rgb(0 0 0 / 67%);
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

            .pei_image{
                max-width: 340px;
                margin: 0 auto;
            }

            .pei_image img{
                width: 100%;
            }

            .pei_image img:hover{
                transform: scale(1.2);
                transition: 0.5s;
            }

            .pokemon-type{
                margin-bottom: 10px;
            }

            .pei_title{
                text-align: center;
            }
        `;
    }

    @property()
    evolution!: Evolution;

    getTypes(types: string) {
        let typesArray = types.split("/");

        let htmlTypes = typesArray.map((type: string) => {
            return html`
                <pokemon-type class="pokemon-type" type="${type}"></pokemon-type>
            `;
        });

        return htmlTypes;
    }

    getMainTypeClass(types: string) {
        let typesArray = types.split("/");
        return typesArray[0].toLowerCase();
    }

    render(){

        return html`
        <div class="pokemon-evolution-item ${this.getMainTypeClass(this.evolution.type)}">
            <div class="pei_data">
                <div class="pei_title">
                    <h1>${this.evolution.name}</h1>
                </div>
                <div class="pei_types">
                    ${this.getTypes(this.evolution.type)}
                </div>
            </div>
            <div class="pei_image">
                <img src="../src/assets/images/pokemons/${this.evolution.image}" alt="${this.evolution.name}">
            </div>

        </div>
        `
    }
    
}