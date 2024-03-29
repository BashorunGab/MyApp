import { setStatusBarBackgroundColor } from "expo-status-bar";
import { useState } from "react";
import { Alert, FlatList, ImageBackground, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";



export function Mylogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  function create() {

    //     Alert.alert(

    //       "Hi",
    //       "Message Here",
    // [{text: "move up", onPress: () => console.log("move up") }, {text: "move down"}]
    //     )

    ToastAndroid.showWithGravity("Account Created Succesfully", 3000)
  }

  return (
    <ScrollView>
      <View style={{ padding: 20, backgroundColor: "blue", }}>

        <Text style={styles.texts}>My First Login Page</Text>

        <Text> Email </Text>

        <TextInput
          style={StyleSheet.input}
          onChangeText={(inp) => setEmail(inp)} />

        <TextInput
          style={StyleSheet.input}
          onChangeText={(inp) => setPassword(inp)} />
      </View>

      <FlatList
      data={list}
      renderItem={({ item })=> {
          return(
              <>
                <Text>
                  {item.id}: {item.text}
                </Text>
              </>
          )
          } }
      />
      <View style={{ backgroundColor: "gray", height: 500, marginTop: 5, }}></View>
      <View style={{ backgroundColor: "gray", height: 500, marginTop: 5, }}></View>
      <View style={{ backgroundColor: "gray", height: 500, marginTop: 5, }}></View>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50
  },

  input: {
    borderwidth: 20,
    borderBlockColor: "blue",
    paddingTop: 40
  },

  texts: {
    fontSize: 50,
  }
})



