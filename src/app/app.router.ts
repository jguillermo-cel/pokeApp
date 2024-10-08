import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { Router } from "@lit-labs/router";

import "./router-components.imports";

import "./pages/pokedex/pokedex.page";
import "./pages/evolution-list/evolution-list.page";
import "./pages/404/not-found.page";
import "./services/pokedex-data.service";

@customElement("app-router")
class AppRouter extends LitElement {
    private router = new Router(this, [
        { path: "/", render: () => html`<pokedex-page></pokedex-page>` },
        { path: "/pokemon/:id", render: ({id}) => html`<evolution-list-page idPokemon=${id}></evolution-list-page>` },
        { path: "/*", render: () => html`<not-found-page></not-found-page>` }
    ]);

    render(){
        return html`
            <pokedex-data>
                ${this.router.outlet()}
            </pokedex-data>
        `;

    }
}

declare global {
    interface HTMLElementTagNameMap {
        "app-router": AppRouter;
    }
}