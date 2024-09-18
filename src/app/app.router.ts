import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { Router } from "@lit-labs/router";

import "./router-components.imports";

@customElement("app-router")
class AppRouter extends LitElement {
    private router = new Router(this, [
        { path: "/", render: () => html`<pokedex-page></pokedex-page>` },
        { path: "/*", render: () => html`<not-found-page></not-found-page>` }
    ]);

    render(){
        return this.router.outlet();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "app-router": AppRouter;
    }
}