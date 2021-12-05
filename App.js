import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './app/navigation/tabs';

/*Navigation bar bliver brugt i en NavigationContainer her.*/
export default function App() {
  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
  );

}







