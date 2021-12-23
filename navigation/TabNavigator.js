import { Text, View } from "react-native";

import AuxNavigator from "./AuxNavigator";
import {Ionicons} from '@expo/vector-icons';
import Navigator from "./Navigator";
import React from "react";
import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <BottomTabs.Navigator 
            initialRouteName="Principal"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarHideOnKeyboard: true
            }}
        >
            <BottomTabs.Screen  
                name="Principal"  
                component={Navigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                            <Ionicons name={'md-home'} size={24} color='black'/>
                            <Text>Home</Text>
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen  
                name="Créditos"   
                component={AuxNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                            <Ionicons name={'md-code-working'} size={24} color='black'/>
                            <Text>Créditos</Text>
                        </View>
                    )
                }}
           />
        </BottomTabs.Navigator>
    )
}


const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: "4%",
        left: "8%",
        right: "8%",
        borderRadius: 5,
        height: 60,
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})


export default TabNavigator