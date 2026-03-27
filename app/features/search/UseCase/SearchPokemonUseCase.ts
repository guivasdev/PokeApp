import { GeneralApiProblem } from "../Adapter/apiProblem"
import { IApiRepositoryInterface } from "../Adapter/IApiRepositoryInterface"
import { Pokemon } from "../Adapter/types"
import { PokemonRepositoryInterface } from "./PokemonRepository"

export class SearchPokemonUseCase implements PokemonRepositoryInterface {
    private repository: IApiRepositoryInterface

    constructor(pokemonRepository: IApiRepositoryInterface) {
        this.repository = pokemonRepository
    }

    searchPokemonName(name: string): Promise<
        | { kind: "ok"; pokemon: Pokemon }
        | GeneralApiProblem
    > {
        return this.repository.searchPokemon(name)
    }

    /* if (!name) {
            alert("Campo inválido!")
        }

        const pokemon = await this.pokemonRepository.searchPokemonName(name)

        if (pokemon.name.length === 0) {
            alert("Nenhum Pokemon encontrado")
        }

        return this.pokemonRepository.searchPokemonName(name) */


}