import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont();

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={{ alignItems: "flex-start", margin: 16 }}
                        onPress={() => this.props.navigation.openDrawer()}
                    >
                        <Icon name="bars" size={30} color="#cc5500" />
                    </TouchableOpacity>
                </SafeAreaView>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text>HomeScreen</Text>
                </View>
            </View>
        );
    }
}

export default HomeScreen;
