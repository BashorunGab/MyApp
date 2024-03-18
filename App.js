import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={{ backgroundColour: "gray", padding: 40, height: 40 }}>
        <Text> React Native </Text>
        <Text> React Native is a very good course </Text>
        <Image source={require("./assets/best.jpg")} style={style.img}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    colour: "white",
    fontSize: 30,
    fontWeight: "bold"
  },
  body: {
    colour: "red",
    marginTop: 20
  },
  img: {
    width: 20,
    height: 20

  }
})