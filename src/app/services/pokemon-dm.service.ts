import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./get-data-dm.service";


@customElement("pokemon-dm")
export class PokemonDM extends LitElement {
    /*
        @property({type : Array})
        pokemons: Pokemon[] = [];
    
        constructor(){
            super();
            console.log('dm pokemon');
            this.addEventListener('ApiPokemon', (e: Event) => {
                console.log('pokemon dm data');
                console.log((e as CustomEvent).detail.data);
                /*const pokemonList = e.detail.data;
                const pokemonList = (e as CustomEvent).detail.data;
            });
        }
    
    
        render() {
            return html`
            hola
                <get-data-dm url="http://localhost:3002/pokemon" method="GET"></get-data-dm>
            `;
        }
    
    */
/*
    @property({ type: Array })
    pokemons: Pokemon[] = [];


    constructor() {
        super();
        this.store = useStore();
        this.dispatch = useDispatch();
        this.pokemons = useSelector((state) => state.pokemons.pokemons);
  }

  loadPokemons(): void {
    fetch('http://localhost:3002/pokemon')
      .then(response => response.json())
      .then(data => {
        this.dispatch(pokemonSlice.actions.loadPokemons(data));
      });
  }

*/

}