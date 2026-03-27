//features/search/UseCase/PokemonRepositoryInterface.ts
import { GeneralApiProblem } from "../Adapter/apiProblem";
import { Pokemon } from "../Adapter/types";

export interface PokemonRepositoryInterface {
  searchPokemonName(nome: string): Promise<
          | { kind: "ok"; pokemon: Pokemon }
          | GeneralApiProblem
      >
}