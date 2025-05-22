import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const nome = "Yuka";

  return <View>
    <Text>Jogo da Velha</Text>
    <Text>Vencedor</Text>

    <View>
        <View>
            <TouchableOpacity>
            <Text></Text>
            </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity>
            <Text></Text>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity>
            <Text></Text>
        </TouchableOpacity>
        </View>

  </View>
</View>
}
