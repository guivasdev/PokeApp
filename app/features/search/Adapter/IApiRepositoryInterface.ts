//app/features/search/Adapter/IApiRepositoryInterface.ts


import { GeneralApiProblem } from "./apiProblem";
import { Pokemon, Item } from "./types";

export interface IApiRepositoryInterface {

     searchPokemon(value: string): Promise<
          | { kind: "ok"; pokemon: Pokemon }
          | GeneralApiProblem
     >
     searchItem(value: string): Promise<
          | { kind: "ok"; item: Item }
          | GeneralApiProblem
     >

}
