import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { levelContext, pokemonContext } from '../context/PokemonList.context';
import { Pokemon } from "../interfaces/pokemon.interface";
import { ContextProvider } from "@lit/context";
import { ContextConsumer } from "@lit/context";

const COLORS = ['blue', 'orange', 'green', 'purple'];

@customElement("pokedex-data")
export class PokedexData extends LitElement {
  /*static pokemons: any[] = [];

  async loadPokemons() {
    try {
      const response = await fetch("http://localhost:3002/pokemon");
      const data = await response.json();
      PokedexData.pokemons = data;
      console.log('pokedex data');
      console.log(PokedexData.pokemons);
    } catch (error) {
      console.error("Error al cargar pokemons:", error);
    }
  }*/

  pokemonItem: Pokemon = {
    name: "pokemon nombre",
    type: "fire",
    image: "bulbasaur.png",
    evolutions: []
  }

  /*
    @provide({ context: pokemonListContext })
    pokemonList: PokemonContext = { pokemons: [this.pokemonItem] };*/

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

  private _providerPoke = new ContextProvider(this, {
    context: pokemonContext,
    initialValue: []
  });

  constructor() {
    super();
    console.log();
  }

  render() {
    return html`<slot></slot>`;
  }







}