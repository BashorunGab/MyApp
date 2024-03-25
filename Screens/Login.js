import { useState } from "react";
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, requireNativeComponent } from "react-native";

const list = [

{id1: "event 1", location: "Kubwa",},
{id2: "event 2", location: "Nyanya",},
{id3: "event 3", location: "Maitama",},
{id4: "event 4", location: "Gwarimpa",}

]

export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

const data = [{email, password }]

    function create(){
        console.log(list);
    }
    
    return (
      
        <>
  <View style={styles.container}>
            <Text style={styles.text}>Online Mall</Text>

            <View style={{marginTop:10, height:10, }} ></View>
            <TextInput
                style={StyleSheet.input}
                onChangeText={(inp) => setEmail(inp)}
            /> 
            <Text>Email: {email}</Text>

            <TextInput
                style={StyleSheet.input}
                onChangeText={(inp) => setPassword(inp)}
            /> 
            <Text>Password: {password}</Text>


            <View style={{marginTop:10, height:10, }} ></View>
            <Button title="Login" onPress={() => console.log(email)} style={styles.btn}></Button>

            <View style={{marginTop:10, height:10, }} ></View>

            <TouchableOpacity onPress={create} style={styles.btn}>
            <Text style={{color: "white" }}>Create Account</Text>
            </TouchableOpacity>

            <TextInput
                style={StyleSheet.input}
                // onChangeText={(inp) => setEmail(inp)}
            /> 
            <Text> Event id: </Text>


            <TextInput
                style={StyleSheet.input}
                // onChangeText={(inp) => setEmail(inp)}
            /> 
            <Text> Location: </Text>
            <TouchableOpacity onPress={""} style={styles.btn}>
            <Text style={{color: "red" }}> Enter Event </Text>
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