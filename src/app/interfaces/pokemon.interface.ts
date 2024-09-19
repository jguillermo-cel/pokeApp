import { Evolution } from "./evolution.interface";


export interface Pokemon {
    id?: string,
    name: string,
    type: string,
    image: string,
    evolutions: Evolution[]
}