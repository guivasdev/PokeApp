//app/features/pokemon/UseCase/UseCasePokemonInterface.ts

import { GeneralApiProblem } from "../Adapter/apiProblem";
import { IRepositoryPokemonInterface } from "../Adapter/IRepositoryPokemonInterface";
import { Pokemon } from "../Adapter/types";
import { IUseCasePokemonInterface } from "./IUseCasePokemonInterface";

export class Service implements IUseCasePokemonInterface {
    private repository : IRepositoryPokemonInterface;

    constructor(repository: IRepositoryPokemonInterface) {
        this.repository = repository

    }

    searchPokemon(value: string):  Promise<
    | { kind: "ok"; pokemon: Pokemon }
    | GeneralApiProblem
  >{
        return this.repository.searchPokemon(value)
    }


}