import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement("get-data-dm")
export class GetDataDM extends LitElement {

    @property()
    url: string = '';

    @property()
    method: string = '';

    connectedCallback() {
        this.getData();
    }

    _sendData(data: any) {
        this.dispatchEvent(new CustomEvent('ApiPokemon', {
            detail: { data }, bubbles: true, composed: true
        }));
    }

    getData() {
        console.log(this.url, this.method);
        fetch(this.url, {
            method: this.method,
        }).then(response => {
            if (response.ok) return response.json();
            return Promise.reject(response);
        })
            .then(data => this._sendData(data))
            .catch((error) => console.log(error));
    }
}