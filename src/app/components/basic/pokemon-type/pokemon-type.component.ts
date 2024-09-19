import { LitElement, css, html } from "lit";    
import { customElement, property } from "lit/decorators.js";

@customElement("pokemon-type")
export class PokemonType extends LitElement {

    static get styles() {
        return css`
            :host {
                display: block;
            }

            .pokemon-type {
                color: #fff;
                background-color: rgb(255 255 255 / 40%);
                border-radius: 50px;
                padding: 5px 10px;
                font-size: 0.8rem;
                min-width: 100px;
                text-align: center;
            }
        `;
    }

    @property()
    type: string = "";

    render() {
        return html`
            <div class="pokemon-type">
                ${this.type}
            </div>
        `;  
    }
}