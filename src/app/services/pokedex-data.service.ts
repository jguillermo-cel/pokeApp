import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { pokemonListContext } from '../context/PokemonList.context';
import { Pokemon } from "../interfaces/pokemon.interface";
import { ContextProvider } from "@lit/context";


@customElement("pokedex-data")
export class PokedexData extends LitElement {
  
  pokemons: any[] = [];

  async loadPokemons() {
    try {
      const response = await fetch("http://localhost:3002/pokemon");
      const data = await response.json();
      this.pokemons = data;
      this._providerPokeList.setValue(this.pokemons);
    } catch (error) {
      console.error("Error al cargar pokemons:", error);
    }
  }

  constructor() {
    super();
  }

  pokemonItem: Pokemon = {
    name: "",
    type: "",
    image: "",
    evolutions: []
  }

  private _providerPokeList = new ContextProvider(this, {
    context: pokemonListContext,
    initialValue: []
  });

  render() {
    this.loadPokemons();
    return html`<slot></slot>`;
  }

}