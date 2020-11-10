import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createAppContainer, SafeAreaView } from "react-navigation";
import {
    createDrawerNavigator,
    DrawerNavigatorItems,
} from "react-navigation-drawer";

import Icon from "react-native-vector-icons/FontAwesome";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";


export default function App() {
    return <App2 />;
}

const CustomDrawerContentComponent = (props) => (
    <View>
        <SafeAreaView>
            <View style={{ justifyContent: "center", height: 200 }}>
                <Text style={{fontSize:14}}>asdfasdf</Text>
            </View>
            <View>
                <DrawerNavigatorItems {...props} />
            </View>
        </SafeAreaView>
    </View>
);

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
				drawerIcon: <Icon name="home" size={24} color="#cc5500" />,
				title:<Text></Text>,
				drawerLabel:"Inicio"
            },
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                drawerIcon: (
                    <Icon name="info-circle" size={24} color="#cc5500" />
                ),
            },
        },
    },
    {
        initialRouteName: "Home",
        contentComponent: CustomDrawerContentComponent,
        drawerPosition: "left",
        // drawerOpenRoute: "DrawerOpen",
        // drawerCloseRoute: "DrawerClose",
        // drawerToggleRoute: "DrawerToggle",
    }
);

const App2 = createAppContainer(DrawerNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
