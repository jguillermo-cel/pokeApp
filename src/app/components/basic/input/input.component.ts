import { LitElement, css, html } from "lit";    
import { customElement, property } from "lit/decorators.js";

@customElement("input-component")
export class InputComponent extends LitElement {

    @property()
    label: string = "";

    @property()
    value: string = "";


    static get styles() {
        return css` 
            :host {
                display: block;
            }

            .input-component {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            label {
            font-weight: bold;
            margin-bottom: 10px;
            }

            input[type="text"] {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
            }

            input[type="text"]:focus {
            border-color: #aaa;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            }
        `;


    }

    handleInput(event: InputEvent) {
        if (event.target && (event.target as HTMLInputElement).value !== undefined) {
            this.value = (event.target as HTMLInputElement).value;
            this.dispatchEvent(new CustomEvent("input-change", { detail: this.value }));
        }
    }

    render() {
        return html`
            <div class="input-component">
                <label>${this.label}</label>
                <input type="text" name=${this.label} value=${this.value} @input=${this.handleInput}>
            </div>
        `;
    }


}