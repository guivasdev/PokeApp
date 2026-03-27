import { useState } from "react"
import { Item, Pokemon } from "../Adapter/types"
import { searchItemUseCase, searchPokemonUseCase } from "../main/makeSearchPokemonUseCase"
import { GeneralApiProblem } from "../Adapter/apiProblem"

export function useSearchApi() {

    const [search, setSearch] = useState("")
    const [radioSelect, setRadioSelect] = useState<"pokemon" | "item">("pokemon")
    const [errorInfo, setErrorInfo] = useState<GeneralApiProblem |  null>(null)
    const [isVisibleDetailModelApi, setIsVisibleDetailModelApi] = useState(false)
    const [result, setResult] = useState<Pokemon | Item>({ id: '', name: '', image: '' })


    async function handleSearch() {
        console.log("inicio do controller: ", isVisibleDetailModelApi)
        if (!search) {
            alert("Dado inválido")
            return
        }

        console.log("dado do campo do texto valido: ", isVisibleDetailModelApi)

        if (radioSelect === "pokemon") {
            //Buscar Pokemon
            const pokeData = await searchPokemonUseCase.searchPokemonName(search)
            if (pokeData.kind === "ok") {
                setResult(pokeData.pokemon)
                setIsVisibleDetailModelApi(true)
                setErrorInfo(null)
            } else {
                console.log("Erro:", pokeData.kind)
                setErrorInfo(pokeData)
            }

        } else {
            //Buscar Item
            const itemData = await searchItemUseCase.searchItemName(search)
            if (itemData.kind === "ok") {
                setResult(itemData.item)
                setIsVisibleDetailModelApi(true)
                setErrorInfo(null)
            } else {
                console.log("Erro:", itemData.kind)
                setErrorInfo(itemData)
            }
        }


    }


    return {
        search,
        radioSelect,
        result,
        errorInfo,
        isVisibleDetailModelApi,
        setIsVisibleDetailModelApi,
        setSearch,
        setRadioSelect,
        handleSearch
    }


}
/*
    async function controller() {
        console.log("inicio do controller: ", visibleDetailModelApi)
        if (!search) {
            alert("Dado inválido")
            return
        }

        console.log("dado do campo do texto valido: ", visibleDetailModelApi)

        if (radioSelect === "pokemon") {
            //Buscar Pokemon
            console.log("é pokemon: ", visibleDetailModelApi)

            const response = await apiRepository.searchPokemon(search)
            //setResult(await apiRepository.searchPokemon(search))
            if (response.kind == "ok") {
                console.log("até aqui deu certo: ", visibleDetailModelApi)

                setPokemon(response.pokemon)
                setVisibleDetailModelApi(true)
                setErrorInfo("")
            }

            else if (response.kind == "not-found")
                setErrorInfo("Pokemon não encontrado")
            else
                setErrorInfo("Ocorreu um erro inesperado! Favor entrar em contato com o suporte!")

        }else{
            //Buscar Item
        }


    }
        */