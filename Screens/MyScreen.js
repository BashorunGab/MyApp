import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";

export function MyScreen() {

    //console.log(StatusBar.currentHeight);

    return (

        <SafeAreaView style={{ backgroundColor: "lightblue", flex: 1, marginTop: StatusBar.currentHeight
    }}>

            <View style={styles.container}>
                <Text style={[styles.text11]}>Hello</Text>
                <Text style={styles.text1}>Travellers</Text>
                <Text style={styles.text11}>Let's take a trip with you</Text>


                <View style={{margingTop:200, height:400}}></View>
                <TouchableOpacity style={[styles.btn1, marginTop=200,]} >
                <Text style={styles.btnText}> Create an Account with Us</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn1, marginTop=40,]}>
                <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>           

                <Image source={require("./assets/icon.png")}/>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "lightblue",
    },

        btn1: {
        backgroundColor: "lightgreen",
        alignContent: "flex-end",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 30,
        
    },

    text1: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center"
    },

    text11: {
        color: "gray",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },

    btnText: {
        color: "white",
        fontSize: 19,
        fontWeight: "bold",
        textAlign: "center"
    },

    btnText2: {
        color: "gray",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    },

    btn2: {
        backgroundColor: "white"
    },

    btnText2: {
        fontSize: 16
    }
})