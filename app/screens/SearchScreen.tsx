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

interface SearchScreenProps extends AppStackScreenProps<"Search"> { }

export const SearchScreen: FC<SearchScreenProps> = () => {
  const { themed } = useAppTheme()

  const [search, setSearch] = useState("")
  const [name, setName] = useState("")
  const [radioSelect, setRadioSelect] = useState<"pokemon" | "item">("pokemon")

  return (
    <Screen style={themed($root)} contentContainerStyle={themed($root)} preset="scroll">
      <View style={themed($view)}>
        {/* TÍTULO */}
        <Text
          text="Buscar Pokémon ou Item"
          preset="heading"
          style={themed($title)}
        />

        {/* INPUT */}
        <TextField
          value={search}
          onChangeText={setSearch}
          placeholder="Digite o nome..."
          autoCapitalize="none"
          style={themed($input)}
        />

        {/* "RADIO" */}
        <View style={themed($radioContainer)}>
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
          onPress={() => {
            console.log(search,)
          }}
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

const $radioContainer: ThemedStyle<any> = ({ spacing }) => ({

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