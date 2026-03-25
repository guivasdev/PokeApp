//app/features/pokemon/Adapter/ApiRepository.ts

import { IRepositoryPokemonInterface } from "./IRepositoryPokemonInterface";

import { ApiResponse, ApisauceInstance, create } from "apisauce"

import Config from "@/config"
import { ApiConfig, Pokemon } from "./types";
import { GeneralApiProblem, getGeneralApiProblem } from "./apiProblem";



export const DEFAULT_API_CONFIG: ApiConfig = {
    url: Config.API_URL,
    timeout: 10000,
}

export class ApiRepository implements IRepositoryPokemonInterface {

    apisauce: ApisauceInstance
    config: ApiConfig


    constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
        this.config = config
        this.apisauce = create({
            baseURL: this.config.url,
            timeout: this.config.timeout,
            headers: {
                Accept: "application/json",
            },
        })
    }

    async searchPokemon(value: string): Promise<{ kind: "ok"; pokemon: Pokemon } | GeneralApiProblem> {

        const response: ApiResponse<Pokemon> = await this.apisauce.get(
            `https://pokeapi.co/api/v2/pokemon/${value}`,
        )
       // console.log(response.status)

        if (!response.ok) {
            const problem = getGeneralApiProblem(response)
           // console.log(problem)
            if (problem) return problem
            
        }

        try {
            
            const rawData = response.data
            //console.log(rawData)

            const pokemon: Pokemon =
            {
                id: rawData?.id + '',
                name: rawData?.name + '',
                image: rawData?.image + ''
            } 
           

            return { kind: "ok", pokemon: pokemon }
        } catch (e) {
            if (__DEV__ && e instanceof Error) {
                console.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
            }
            return { kind: "bad-data" }
        }
    }

}

export const apiRepository = new ApiRepository()


