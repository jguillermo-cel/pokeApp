import { LitElement, css, html } from "lit";    
import { customElement } from "lit/decorators.js";

import "./../../shared/header/header.component";
import "./../../components/pokemon/pokemon.component";
import { consume } from "@lit/context";
import { Level, pokemonListContext, levelContext } from "../../context/PokemonList.context";
import { Pokemon } from "../../interfaces/pokemon.interface";
/*import { PokedexService } from "src/app/services/pokedex.service";
import { Pokedex } from "src/app/models/pokedex.model";*/

@customElement("pokedex-page")
export class PokedexPage extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }

            .page-pokedex{
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                padding: 20px;
                justify-content: center;
            }
        `;
    }

    @consume({context: levelContext})
    private _level?: Level;

    @consume({context: pokemonListContext, subscribe: true })
    private _pokemonList?: Pokemon[];

    constructor() { 
        super();
        
    }



    render() {
        console.log(this._level);
        console.log("this._pokemonList");
        console.log(this._pokemonList);
        return html`
            <header-component title="Pokedex"></header-component>
            <div class="page-pokedex">
                ${this._pokemonList?.map((pokemon: Pokemon) => html`<pokemon-component .pokemon=${pokemon} ></pokemon-component>`) }
            </div>
        `;  
    }
}