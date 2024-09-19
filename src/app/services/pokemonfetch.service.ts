import { Pokemon } from "../interfaces/pokemon.interface";


export const fetchPokemon = async(
    signal: AbortSignal
): Promise<Pokemon[]> => {
    await new Promise((r) => setTimeout(r, 1000));
    const response = await fetch('http://localhost:3002/pokemon', {
        signal
    } );
    if(response.status === 200){
        return response.json();
    } else {
        throw new Error('Error al cargar pokemons');
    }
}

