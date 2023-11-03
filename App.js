import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen1 from './src/screens/OnBoardingScreen1';
import OnBoardingScreen2 from './src/screens/OnBoardingScreen2';
import Libraray from './src/screens/Libraray';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardingScreen1" component={OnBoardingScreen1} />
        {/* <Stack.Screen name="OnBoardingScreen2" component={OnBoardingScreen2} /> */}
        <Stack.Screen name="Libraray" component={Libraray} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
