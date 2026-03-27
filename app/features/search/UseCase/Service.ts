//app/features/pokemon/UseCase/UseCasePokemonInterface.ts

/*import { GeneralApiProblem } from "../Adapter/apiProblem";
import { IApiRepositoryInterface } from "../Adapter/IApiRepositoryInterface";
import { Pokemon } from "../Adapter/types";
import { IUseCasePokemonInterface } from "./IUseCasePokemonInterface";

export class Service implements IUseCasePokemonInterface {
    private repository : IApiRepositoryInterface;

    constructor(repository: IApiRepositoryInterface) {
        this.repository = repository

    }

    searchPokemon(value: string):  Promise<
    | { kind: "ok"; pokemon: Pokemon }
    | GeneralApiProblem
  >{
        return this.repository.searchPokemon(value)
    }


}
    */