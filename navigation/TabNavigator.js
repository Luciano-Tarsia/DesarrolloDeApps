import { Text, View } from "react-native";

import AuxNavigator from "./AuxNavigator";
import {Ionicons} from '@expo/vector-icons';
import Navigator from "./Navigator";
import React from "react";
import { StyleSheet } from "react-native";
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
        shadowColor: '#7f5df0',
        elevation: 20,
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 65,
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})


export default TabNavigator