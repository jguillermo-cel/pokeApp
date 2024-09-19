import { LitElement, css, html } from "lit";    
import { customElement, property } from "lit/decorators.js";

@customElement("button-component")
export class ButtonComponent extends LitElement {
    

    static get styles() {        
        return css`
            :host {
                display: block;
            }

            button {
                background-color: #4CAF50;
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;

                margin: 4px 2px;
                cursor: pointer;
                border-radius: 4px;
                transition-duration: 0.4s;
            }

            button:hover {
                background-color: #3e8e41; 
            }

            .red button{
                background-color: #f44336;
            }

            .red button:hover {
                background-color: #da190b;
            }
        `;
    }

    @property()
    label?: string;


    render() {
        return html`
            <button>${this.label}</button>    
            `;
    }
}