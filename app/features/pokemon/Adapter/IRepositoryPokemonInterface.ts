//app/features/pokemon/Adapter/IRepositoryInterface.ts

import { GeneralApiProblem } from "./apiProblem";
import { Pokemon } from "./types";

export interface IRepositoryPokemonInterface {

     searchPokemon(value: string): Promise<
          | { kind: "ok"; pokemon: Pokemon }
          | GeneralApiProblem
     >

}
