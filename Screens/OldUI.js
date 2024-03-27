import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export function OldUI() {
  return (
      <View  style={{backgroundColor: "blue", padding: 40, height: "100%", }}>
        <Text style={styles.header}> Onlline Phones </Text>
        <Text style={styles.body}> The home for Best UK Used Phones </Text>
        <Image source={require("./assets/Phage.jpeg")} style={styles.img}></Image> 
        <Image source={require("./assets/phimg.jpeg")} style={styles.img}></Image>
        <View style={{alignItems: "center", }}></View>
        </View>
  );
  }
const styles = StyleSheet.create({
  header: {
    colour: "red",
    fontSize: 30,
    fontWeight: "bold",
  },
  body: {
    colour: "red",
    marginTop: 20,
  },
  img: {
    width: 200,
    height: 200
  }
})