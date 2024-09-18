import { LitElement, css, html } from "lit";    
import { customElement, property } from "lit/decorators.js";

@customElement("header-component")
export class Header extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }

    @property()
    title:string = "";

    render() {
        return html`
            <h1>${this.title}</h1>
        `;  
    }
}