import { LitElement, css, html } from "lit";    
import { customElement } from "lit/decorators.js";

@customElement("app-main")
export class App extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }

    render() {
        return html`
            <h1>App main</h1>
        `;  
    }
}