import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React, { useEffect, useState } from "react";
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Divider, Menu, PaperProvider } from "react-native-paper";
import { Image } from "react-native-svg";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";



export function Products() {
    // console.log(StatusBar.currentHeight);
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const [mytrue, setmytrue] = useState("")

    const [year, setYear] = useState(2022);

    useEffect(() => {
        setYear(2024)
        console.log(year);

    }, [year]
    );

useEffect(() => {

    async function prepare() {
        try{
await Font.loadAsync({Pacifico_400Regular})
await Font.loadAsync({Pacifico_400Regular})

        }catch(e){
            console.warn(e)
        }finally{
            setAppReady(true);
        }
    }
}

)

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>
                <PaperProvider>
                    <View
                        style={{
                            paddingTop: 50,
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                        <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={<Button onPress={openMenu}>Show menu</Button>}>
                            <Menu.Item onPress={() => { }} title="Peter Obi" />
                            <Menu.Item onPress={() => { }} title="Davido" />
                            <Divider />
                            <Menu.Item onPress={() => { }} title="Mr Miracle" />
                        </Menu>
                    </View>

                    <View>

                        <Text style={styles.text}> LINDA IKEJI BLOG</Text>
                        {/* <FontAwesomeIcon icons size={30} color="green" />
                <FontAwesomeIcon icon="fa-regular fa-user" /> */}
                        {/* <FontAwesomeIcon icon="icons"/> */}
                        {/* <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                        Press me
                    </Button>

                    <View style={styles.shadow}> */}

                    </View>

                    <Image source={require("../assets/PObi.jpeg")} />
                    <View>
                        <Image source={require("../assets/PObi.jpeg")} />

                        <Card>
                            <Image source={require("../assets/PObi.jpeg")} />
                            <Card.Title title="Peter Obi President of Nigeria" subtitle="Election News" left={LeftContent} />
                            <Card.Content>
                                <Text variant="titleLarge">Peter Obi Wins Election</Text>
                                <Text variant="bodyMedium">Peter Obi has won Nigeria election 2027</Text>
                            </Card.Content>

                            <Card.Cover source={require("../assets/PObi.jpeg")} />
                            <Card.Actions>
                                <Button>Like</Button>
                                <Button>Repost</Button>
                            </Card.Actions>
                        </Card>


                        <Card>
                            <Card.Title title="Davido Marries 3rd Wife" subtitle="Card Currently expecting a baby" left={LeftContent} />
                            <Card.Content>
                                <Text variant="titleLarge">Wife is an Indian</Text>
                                <Text variant="bodyMedium">Nigerian Music star</Text>
                            </Card.Content>
                            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                            <Card.Actions>
                                <Button>Like</Button>
                                <Button>Repost</Button>
                            </Card.Actions>
                        </Card>

                        <Card>
                            <Card.Title title="Mr Miracle buys manion in Abuja" subtitle="The Early code instructor buys a N500M mansion" left={LeftContent} />
                            <Card.Content>
                                <Text variant="titleLarge">N500M Mansion </Text>
                                <Text variant="bodyMedium">With the mansion</Text>
                            </Card.Content>
                            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                            <Card.Actions>
                                <Button>Like</Button>
                                <Button>Repost</Button>
                            </Card.Actions>
                        </Card>

                        <Card>
                            <Card.Title title="Tosin Oyefuga appointed as minister of Technology" subtitle="Peter Obi apoints minister" left={LeftContent} />
                            <Card.Content>
                                <Text variant="titleLarge">Tech in Nigeria</Text>
                                <Text variant="bodyMedium">Good news in Nigeria tech industry</Text>
                            </Card.Content>
                            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                            <Card.Actions>
                                <Button>Like</Button>
                                <Button>Repost</Button>
                            </Card.Actions>
                        </Card>

                        <Card>
                            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                            <Card.Content>
                                <Text variant="titleLarge">Card title</Text>
                                <Text variant="bodyMedium">Card content</Text>
                            </Card.Content>
                            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                            <Card.Actions>
                                <Button>Cancel</Button>
                                <Button>Ok</Button>
                            </Card.Actions>
                        </Card>

                    </View>
                </PaperProvider>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "Green",
        flex: 1,
        marginTop: StatusBar.currentHeight
    },

    shadow: {
        backgroundColor: "White",
        padding: 10,
        marginTop: 30,
        borderWidth: 0.5,
        elevation: 5,

        shadowColor: "",
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 0.5
    },
    text: {
        alignItems: "center",
        fontSize: 40,

    }
});