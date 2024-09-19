import { createContext } from "@lit/context";
import { Pokemon } from "../interfaces/pokemon.interface";
/*import type { PokemonContext } from "../interfaces/contexts.interface";

export type { PokemonContext } from "../interfaces/contexts.interface";

export const pokemonListContext = createContext<PokemonContext>( 'pokemonListContext' );*/


export type Level = {level: number; color: string};

export const levelContext = createContext<Level>(Symbol('level'));


// context main

export type PokemonContext = Pokemon[];

export const pokemonContext = createContext<PokemonContext>( Symbol('pokemonSymbol') );

