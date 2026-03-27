//app/features/pokemon/UseCase/IUseCasePokemonInterface.ts
//app/features/pokemon/Adapter/RepositoryInterface.ts

import { GeneralApiProblem } from "../Adapter/apiProblem";
import { Pokemon } from "../Adapter/types";



export interface IUseCasePokemonInterface {


    searchPokemon(value: string): Promise<
        | { kind: "ok"; pokemon: Pokemon }
        | GeneralApiProblem
    >

}