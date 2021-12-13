import React, {useState} from 'react';
import { StyleSheet, View } from "react-native";

import AppLoading from 'expo-app-loading';
import PrincipalScreen from './pages/PrincipalScreen';
import WelcomeScreen from './pages/WelcomeScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [avanzar, setAvanzar] = useState(false);
  const [loaded] = useFonts({
    openSans: require('./assets/fonts/OpenSansCondensed-Bold.ttf'),
  })

  if (!loaded) return <AppLoading />

  return (
    <View>
      {avanzar?
        <PrincipalScreen/>
      : <WelcomeScreen setAvanzar={setAvanzar} />}
    </View>
  )
}

//const styles = StyleSheet.create({
//
//});