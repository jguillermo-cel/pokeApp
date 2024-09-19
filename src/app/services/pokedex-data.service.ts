import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { levelContext, pokemonListContext } from '../context/PokemonList.context';
import { Pokemon } from "../interfaces/pokemon.interface";
import { ContextProvider } from "@lit/context";
import { ContextConsumer } from "@lit/context";

const COLORS = ['blue', 'orange', 'green', 'purple'];

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
    name: "pokemon nombre",
    type: "fire",
    image: "bulbasaur.png",
    evolutions: []
  }


  private _provider = new ContextProvider(this, {
    context: levelContext,
    initialValue: { level: 0, color: COLORS[0] }
  });


  private _consumer = new ContextConsumer(this, {
    context: levelContext,
    callback: ({ level }) => {
      this._provider.setValue({
        level: level + 1,
        color: COLORS[(level + 1 ) % COLORS.length]
      })
    }
  });

  private _providerPokeList = new ContextProvider(this, {
    context: pokemonListContext,
    initialValue: []
  });
/*
  private _consumerPokeList = new ContextConsumer(this, {
    context: pokemonListContext,
    callback: () => {
      this._providerPokeList.setValue(this.pokemons);
    }
  });
*/

  render() {
    this.loadPokemons();
    return html`<slot></slot>`;
  }

}