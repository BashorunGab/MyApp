import { useState } from "react";
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const list = [

  { id1: "event 1", location: "Kubwa" },
  { id2: "event 2", location: "Nyanya" },
  { id3: "event 3", location: "Maitama" },
  { id4: "event 4", location: "Gwarimpa" }
]

export function Event() {
  const [id, setId] = useState("")
  const [location, setLocation] = useState("")

function addEvent() {

    newarrList = [list.push]
    console.log(newarrList);
  }

  return (

    <>
      <View style={styles.container}>
        <Text style={styles.text} alignItems="centre"> Online Mall </Text>

        <TextInput
          style={StyleSheet.input}
          onChangeText={(inp) => setId(inp)}
        />
        <Text> Event id: </Text>

        <TextInput
          style={StyleSheet.input}
          onChangeText={(inp) => setLocation(inp)}
        />
        <Text> Location: </Text>
        <TouchableOpacity onPress={(addEvent) => console.log(addEvent)} style={styles.btn}>
          <Text style={{ color: "red" }}> Enter Event </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    marginTop: 40,
  },

  input: {
    borderwidth: 40,
    borderBlockColor: "red",
    padding: 10,
    borderRadius: 40,
    alignItems: "center",
  },
  btn: {
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
  },

  text: {
    fontSize: 40,
    padding: 15,
    alignItems: "center",
  }
})