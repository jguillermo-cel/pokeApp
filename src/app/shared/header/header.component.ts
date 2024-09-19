import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("header-component")
export class Header extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;

            }

            h1{
                text-align: center;
                font-size: 3rem;
                padding-top: 30px;
                padding-bottom: 30px;
                margin: 0;
                background-color: #DC5F55;
                color: yellow;
                font-family: 'Pokemon Solid', sans-serif;
                text-shadow: 
                    5px 5px 0 #4169B4,
                    -5px -5px 0 #4169B4,
                    5px -5px 0 #4169B4,
                    -5px 5px 0 #4169B4;

                    box-shadow: -1px -1px 17px 2px #647398;
                        letter-spacing: 4px;
            }
        `;
    }

    @property()
    title: string = "";

    render() {
        return html`
            <h1>${this.title}</h1>
        `;
    }
}