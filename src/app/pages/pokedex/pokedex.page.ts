import { LitElement, css, html } from "lit";    
import { customElement } from "lit/decorators.js";
/*import { PokedexService } from "src/app/services/pokedex.service";
import { Pokedex } from "src/app/models/pokedex.model";*/

@customElement("pokedex-page")
export class PokedexPage extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }

    render() {
        return html`
            <h1>Pokedex</h1>
        `;  
    }
}