import { StyleProp, TextStyle, View, ViewStyle, Image, TouchableOpacity, ImageStyle } from "react-native"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"
import { Text } from "@/components/Text"
import { Item, Pokemon } from "@/features/search/Adapter/types"
import { colors } from "@/theme/colors"

export interface PokemonDetailModelProps {
  data: Pokemon | Item
  onClose: () => void
  style?: StyleProp<ViewStyle>
}

export const DetailModelApi = (props: PokemonDetailModelProps) => {
  const { data, onClose } = props
  const { themed } = useAppTheme()

  return (
    <View style={themed($container)}>

      {/* Botão fechar */}
      <TouchableOpacity style={themed($closeButton)} onPress={onClose}>
        <Text text="X" style={{ textAlign: 'center', fontSize:18,color: 'white', fontWeight: 'bold', margin: 'auto' }} />
      </TouchableOpacity>

      {/* Título */}
      <Text text={"DETALHES DA BUSCA"} style={{ marginTop: 15, textAlign: 'center', fontSize: 23, letterSpacing: 2 }} preset="heading" />

      {/* Conteúdo */}
      <View style={themed($content)}>

        {/* Infos */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }} >
          <Text text={`ID: ${data.id}`} style={themed($text)} />
          <Text text={`Nome: ${data.name}`} style={themed($text)} />
        </View>

        {/* Imagem */}
        <Image
          source={{ uri: data.image }}
          style={themed($image)}
        />
      </View>

    </View>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
  padding: spacing.md,
  backgroundColor: colors.palette.neutral500,
  borderRadius: 15,
  borderEndWidth: 2,
  borderBottomWidth: 2,
  borderColor: colors.palette.neutral600

})

const $closeButton: ThemedStyle<ViewStyle> = () => ({
  position: "absolute",
  backgroundColor: colors.palette.neutral700, width: 40, height: 40,
  borderRadius: 50,
  top: 4,
  right: 7,
  zIndex: 1,
})

const $content: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: "column",
  justifyContent: "space-between",
  marginTop: spacing.sm,
})

const $image: ThemedStyle<ImageStyle> = () => ({
  width: 80,
  height: 80,
})

const $text: ThemedStyle<TextStyle> = ({ colors, typography }) => ({
  fontFamily: typography.primary.normal,
  fontSize: 15,
  color: colors.palette.neutral100,
  fontWeight: 'bold',
  letterSpacing: 1.5,
})