import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text, Button} from 'react-native';
import Tabs from './app/navigation/tabs';
import { MainStackNavigator } from './app/navigation/StackNavigator';

const Stack = createStackNavigator();


/*Navigation bar bliver brugt i en NavigationContainer her.*/
const App = () => {
  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
  );
}

export default App;







