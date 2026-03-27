
import { GeneralApiProblem } from "../Adapter/apiProblem"
import { IApiRepositoryInterface } from "../Adapter/IApiRepositoryInterface"
import { Item } from "../Adapter/types"
import { ItemRepositoryInterface } from "./ItemRepositoryInterface"

export class SearchItemUseCase implements ItemRepositoryInterface {
    private repository: IApiRepositoryInterface

    constructor(pokemonRepository: IApiRepositoryInterface) {
        this.repository = pokemonRepository
    }

    searchItemName(name: string): Promise<
        | { kind: "ok"; item: Item }
        | GeneralApiProblem
    > {
        return this.repository.searchItem(name)
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