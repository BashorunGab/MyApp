import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export function Position() {
    console.log(StatusBar.currentHeight);
    
    return (

        <SafeAreaView style={{flex:1, backgroundColor: "red"}}>
            <View style={styles.parent}>
            <Text>hi</Text>
            </View>
            <View style={[styles.child, {backgroundColor: "gray"}]}></View>
            <View style={[styles.child, {backgroundColor: "blue"}]}></View>
            <View style={[styles.child, {backgroundColor: "gray"}]}></View>
        </SafeAreaView>
 ) }

const styles = StyleSheet.create({
    parent:{ 
        backgroundcolor: "gray", 
        height: 200, 
        marginTop: StatusBar.currentHeight },
        flexwrap: "",
        flexdirection: "row",

//fontawesome


        child:{
            backgroundColor: "Green",
            width: 50,
            height: 50,
            margin: 1
        }
});
