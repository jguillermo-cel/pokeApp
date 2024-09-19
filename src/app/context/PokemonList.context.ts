import { createContext } from "@lit/context";
import { Pokemon } from "../interfaces/pokemon.interface";

// context main

export type PokemonListContext = Pokemon[];

export const pokemonListContext = createContext<PokemonListContext>( Symbol('pokemonListSymbol') );



// context pokemon

export type PokemonContext = Pokemon;

export const pokemonContext = createContext<PokemonContext>( Symbol('pokemonSymbol') );
