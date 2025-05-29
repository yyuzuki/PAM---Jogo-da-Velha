import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

    const cell = () => {
        return (
        <TouchableOpacity style={style.cell}>
        <Text style={style.cellContent}>X</Text>
      </TouchableOpacity>
        )
    }

  return (
    <View style={style.container}>
      <Text style={style.title}>Jogo da Velha</Text>
      <Text>Vencedor</Text>

      <View>

        <View>
          {cell()}
        </View>

        <View style={style.row}>
          {cell()}
          {cell()}
          {cell()}
        </View>

        <View style={style.row}>
          {cell()}
          {cell()}
          {cell()}

        </View>

        <View style={style.row}>
        {cell()}
          {cell()}
          {cell()}

        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#ffe5ec',
    },
title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    },
status: {
    fontSize: 18,
    marginBottom: 20,
},
board: {
    marginBottom: 20,
},
row: {
    flexDirection: 'row',
},
cell: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#ffb3c6',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fb6f92',
},
cellContent: {
    fontSize: 36,
    fontWeight: "bold",
},

})
