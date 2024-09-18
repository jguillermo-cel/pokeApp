import { LitElement, css, html } from "lit";    
import { customElement, property } from "lit/decorators.js";

import "./../../shared/header/header.component";
/*import { PokedexService } from "src/app/services/pokedex.service";
import { Pokedex } from "src/app/models/pokedex.model";*/

@customElement("evolution-list-page")
export class EvolutionListPage extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }

    @property()
    idPokemon?: string;

    render() {
        return html`
            <header-component title="Evoluciones"></header-component>
            <h1>Evolution list - id: ${this.idPokemon}</h1>
        `;  
    }
}