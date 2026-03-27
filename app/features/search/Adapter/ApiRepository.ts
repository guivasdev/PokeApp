//app/features/search/Adapter/ApiRepository.ts

import { ApiResponse, ApisauceInstance, create } from "apisauce"
import Config from "@/config"
import { ApiConfig, Item, Pokemon } from "./types";
import { GeneralApiProblem, getGeneralApiProblem } from "./apiProblem";
import { IApiRepositoryInterface } from "./IApiRepositoryInterface";

export const DEFAULT_API_CONFIG: ApiConfig = {
    url: Config.API_URL,
    timeout: 10000,
}

export class ApiRepository implements IApiRepositoryInterface {

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

        if (!response.ok) {
            const problem = getGeneralApiProblem(response)
            if (problem) return problem 
        }

        try {
            
            const rawData = response.data

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

    async searchItem(value: string): Promise<{ kind: "ok"; item: Item } | GeneralApiProblem> {

        const response: ApiResponse<Item> = await this.apisauce.get(
            `https://pokeapi.co/api/v2/item/${value}/`,
        )

        if (!response.ok) {
            const problem = getGeneralApiProblem(response)
            if (problem) return problem 
        }

        try {
            
            const rawData = response.data

            const item: Item =
            {
                id: rawData?.id + '',
                name: rawData?.name + '',
                image: rawData?.image + ''
            } 

            return { kind: "ok", item: item }
        } catch (e) {
            if (__DEV__ && e instanceof Error) {
                console.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
            }
            return { kind: "bad-data" }
        }
    }

}

export const apiRepository = new ApiRepository()