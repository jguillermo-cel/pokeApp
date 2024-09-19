import { LitElement, css, html } from "lit";    
import { customElement, property } from "lit/decorators.js";

@customElement("select-component")
export class SelectComponent extends LitElement {
    @property()
    label: string = "";

    @property()
    value: string = "";

    @property()
    options: string[] = [];

    @property()
    disabled: boolean = false;

    @property()
    name: string = "";

    @property()
    id: string = "";

    @property()
    placeholder: string = "";


    static get styles() {
        return css` 
            :host {
                display: block;
            }

            .select-component {
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

            select {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
            }

            select:focus {
            border-color: #aaa;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            }   
        `;  
    }

    handleSelectChange(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        if (selectElement) {
            this.value = selectElement.value;
            this.dispatchEvent(new CustomEvent("input-change", { detail: this.value }));
        }
    }

    render() {
        return html`    
            <div class="select-component">
                <label>${this.label}</label>
                <select name=${this.name} id=${this.id} value=${this.value} ?disabled=${this.disabled} @change=${this.handleSelectChange}>
                    ${this.placeholder ? html`<option value="">${this.placeholder}</option>` : html``}
                    ${this.options.map((option) => html`<option value=${option}>${option}</option>`)}
                </select>
            </div>
        `;
    }   
}