import React, {useState} from 'react';
import { StyleSheet, View } from "react-native";

import AppLoading from 'expo-app-loading';
import PrincipalScreen from './pages/PrincipalScreen';
import WelcomeScreen from './pages/WelcomeScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    openSans: require('./assets/fonts/OpenSansCondensed-Bold.ttf'),
  })

  if (!loaded) return <AppLoading />

  const [avanzar, setAvanzar] = useState(false);

  let content = null
  avanzar?
    content = <PrincipalScreen/>
    : content = <WelcomeScreen setAvanzar={setAvanzar} />

  return (
    <View>
      {content}
    </View>
  )
}

//const styles = StyleSheet.create({
//
//});