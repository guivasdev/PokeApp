import { useState } from "react"
import { apiRepository } from "../Adapter/ApiRepository"
import { Pokemon } from "../Adapter/types"
import { GeneralApiProblem } from "../Adapter/apiProblem"

export function useCasePokemon() {

    const [search, setSearch] = useState("")
    const [radioSelect, setRadioSelect] = useState<"pokemon" | "item">("pokemon")
    const [namePokemon, setNamePokemon] = useState("")

    async function controller() {
        if (!search) {
            alert("Dado inválido")
            return
        } else {

            if (radioSelect === "pokemon") {
                const response = await apiRepository.searchPokemon(search)
                //setResult(await apiRepository.searchPokemon(search))
                if (response.kind == "ok")
                    setNamePokemon(response.pokemon.name)
                else if (response.kind == "not-found")
                    setNamePokemon("Pokemon não encontrado")
                else
                    setNamePokemon("Ocorreu um erro inesperado! Favor entrar em contato com o suporte!")
            }
        }


    }

    return {
        search,
        setSearch,
        radioSelect,
        setRadioSelect,
        namePokemon,
        controller
    }


}