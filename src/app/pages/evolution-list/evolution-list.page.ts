import { LitElement, css, html } from "lit";    
import { customElement, property } from "lit/decorators.js";

import "./../../shared/header/header.component";

import "./../../services/evolution-data.service";
import "./../../components/pokemon-evolution/pokemon-evolution.component";
import "./../../components/basic/button/button.component";

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


    addPokemon(){
        console.log('addPokemon');
    }


    render() {
        return html`
            <header-component title="Evoluciones"></header-component>
                <evolution-data idPokemon=${this.idPokemon}>   
                    <div class="evolution-page_button">
                        <button-component @click=${() => window.history.back()} label="Volver"></button-component>
                    </div>
                    
                    <pokemon-evolution></pokemon-evolution>
                    <div class="btn-add-content">
                        <button-component @click=${this.addPokemon()} label="+"></button-component>
                    </div>
                </evolution-data>
            
        `;  
    }
}