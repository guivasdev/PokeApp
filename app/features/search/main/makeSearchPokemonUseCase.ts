// main/makeSearchPokemonUseCase.ts

import { apiRepository } from "../Adapter/ApiRepository"
import { SearchItemUseCase } from "../UseCase/SearchItemUseCase"
import { SearchPokemonUseCase } from "../UseCase/SearchPokemonUseCase"


export const searchPokemonUseCase = new SearchPokemonUseCase(apiRepository)
export const searchItemUseCase = new SearchItemUseCase(apiRepository)
