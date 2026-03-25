import { FC, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import type { AppStackScreenProps } from "@/navigators/navigationTypes"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { TextField } from "@/components/TextField"
import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"
import { colors } from "@/theme/colors"
import { Radio } from "@/components/Toggle/Radio"
import { useCasePokemon } from "@/features/pokemon/Controller/useCasePokemon"
import { Pokemon } from "@/features/pokemon/Entity/Pokemon"

interface SearchScreenProps extends AppStackScreenProps<"Search"> { }

export const SearchScreen: FC<SearchScreenProps> = () => {
  const { themed } = useAppTheme()
  const { search, setSearch, controller, namePokemon, radioSelect, setRadioSelect } = useCasePokemon()

  const callController = () => {
    controller()
  }

  return (
    <Screen style={themed($root)} contentContainerStyle={themed($root)} preset="scroll">
      <View style={themed($view)}>
        {/* TÍTULO */}
        <Text
          text="Buscar Pokémon ou Item"
          preset="heading"
          style={themed($title)}
        />
        <Text>
          {namePokemon}
        </Text>
        {/* INPUT */}
        <TextField
          value={search}
          onChangeText={setSearch}
          placeholder="Digite o nome..."
          autoCapitalize="none"
          style={themed($input)}
        />

        {/* "RADIO" */}
        <View style={{ justifyContent: "space-around", height: '30%', }}>
          <Text style={{ fontSize: 18, textAlign: 'center', padding: 3, marginBottom: 8, fontWeight: '600' }} text="Selecione abaixo o que deseja buscar!" />

          {/*  Radio Button Pokemon */}
          <Radio
            label="Pokemon"
            value={radioSelect === "pokemon"}
            onValueChange={() => setRadioSelect("pokemon")}
            containerStyle={themed($radioContainer)}
          />

          {/*  Radio Button Item */}
          <Radio
            label="Item"
            value={radioSelect === "item"}
            onValueChange={() => setRadioSelect("item")}
            containerStyle={themed($radioContainer)}

          />

        </View>

        {/* BOTÃO BUSCAR */}
        <Button
          text="BUSCAR"
          preset="reversed"
          onPress={callController}

          style={themed($searchButton)}
        />

        {/* FLOAT BUTTON */}
        <View style={themed($fabContainer)}>
          <Button
            onPress={() => {
              console.log("Ir para histórico")
            }}
            style={themed($fab)}
          >
            <Icon icon="menu" size={24} />
          </Button>
        </View>
      </View>

    </Screen>
  )
}

// ================== STYLES ==================

const $root: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flex: 1, backgroundColor: colors.background,
  padding: spacing.md,
})
const $view: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  height: '80%',
  backgroundColor: colors.palette.neutral300,
  justifyContent: 'space-evenly',
  padding: spacing.md,
  margin: 'auto',
  borderEndWidth: 2,
  borderBottomWidth: 2,
  borderRadius: 10,
  borderColor: colors.palette.neutral400,
  elevation: 2
})

const $title: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginBottom: spacing.md,
  textAlign: 'center'
})

const $input: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginBottom: spacing.md,
  textAlign: 'center',
})

const $radioContainer: ThemedStyle<any> = () => ({

  backgroundColor: colors.palette.neutral500,
  width: '85%',
  margin: 'auto',
  padding: 8,
  borderRadius: 5
})



const $searchButton: ThemedStyle<any> = ({ spacing }) => ({
  marginTop: spacing.sm,
})

const $fabContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  position: "absolute",
  bottom: spacing.xs,
  right: spacing.xs,
})

const $fab: ThemedStyle<any> = ({ colors }) => ({
  borderRadius: 100,
  padding: 3,
  backgroundColor: colors.palette.neutral500,

})