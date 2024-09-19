import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Pokemon } from "../interfaces/pokemon.interface";
import { pokemonContext } from "../context/PokemonList.context";
import { ContextProvider } from "@lit/context";
import { ContextConsumer } from "@lit/context";



@customElement("evolution-data")
export class EvolutionData extends LitElement {

    pokemonObj = {}

    @property()
    idPokemon?: string;

    pokemonInit: Pokemon = {
        name: "",
        type: "",
        image: "",
        evolutions: []
    }

    async loadPokemon() {
        try {
            const response = await fetch("http://localhost:3002/pokemon/" + this.idPokemon);
            const data = await response.json();
            this.pokemonInit = data;
            this._providerPoke.setValue(this.pokemonInit);
        } catch (error) {
            console.error("Error al cargar pokemons:", error);
        }
    }

    private _providerPoke = new ContextProvider(this, {
        context: pokemonContext,
        initialValue: this.pokemonInit
    });
/*
    private _consumerPoke = new ContextConsumer(this, {
        context: pokemonContext,
        callback: () => {
            this._providerPoke.setValue(this.pokemonInit);
        }
    })*/

    /*
    private _consumerPokeList = new ContextConsumer(this, {
    context: pokemonListContext,
    callback: () => {
      this._providerPokeList.setValue(this.pokemons);
    }
  });
    */
    



    render() {
        this.loadPokemon();
        return html`<slot></slot>`;
    }


}