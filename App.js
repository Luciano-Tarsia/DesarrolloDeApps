import React, {useState} from 'react';

import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import { useFonts } from 'expo-font';

export default function App() {
  
  const [avanzar, setAvanzar] = useState(false);
  const [loaded] = useFonts({
    openSans: require('./assets/fonts/OpenSansCondensed-Bold.ttf'),
  })

  if (!loaded) return <AppLoading />

  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  )
}

//const styles = StyleSheet.create({
//
//});