import { useState } from "react"
import { apiRepository } from "../Adapter/ApiRepository"
import { Pokemon } from "../Adapter/types"

export function useCasePokemon() {

    const [search, setSearch] = useState("")
    const [radioSelect, setRadioSelect] = useState<"pokemon" | "item">("pokemon")
    const [errorInfo, setErrorInfo] = useState('')
    const [visibleDetailModelApi, setVisibleDetailModelApi] = useState(false)
    const [pokemon, setPokemon] = useState<Pokemon>({ id: '', name: '', image: '' })


    async function controller() {
        console.log("inicio do controller: ", visibleDetailModelApi)
        if (!search) {
            alert("Dado inválido")
            return
        } else {
            console.log("dado do campo do texto valido: ", visibleDetailModelApi)

            if (radioSelect === "pokemon") {
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
            }
        }


    }

    return {
        search,
        radioSelect,
        pokemon,
        errorInfo,
        visibleDetailModelApi,
        setVisibleDetailModelApi,
        setSearch,
        setRadioSelect,
        controller
    }


}