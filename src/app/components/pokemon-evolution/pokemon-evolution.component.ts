import { LitElement, css, html } from "lit";    
import { customElement, property } from "lit/decorators.js";
import { Evolution } from "../../interfaces/evolution.interface";
import { consume } from "@lit/context";
import { pokemonContext } from "../../context/PokemonList.context";
import { Pokemon } from "../../interfaces/pokemon.interface";
import "./pokemon-evolution-item.component";


@customElement("pokemon-evolution")
export class PokemonEvolution extends LitElement {

    @property()
    evolutionList: Evolution[] = [];


    static get styles() {        
        return css``;
    }

    @consume({context: pokemonContext, subscribe: true })
    private _pokemon?: Pokemon;


    render() {
        this.evolutionList = this._pokemon?.evolutions!;
        return html`
            ${this.evolutionList.map((evolution: Evolution) => html`<pokemon-evolution-item .evolution=${evolution} ></pokemon-evolution-item>`)}
        `;
    }

}