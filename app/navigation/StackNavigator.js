import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import About from "../screens/TestScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={WelcomeScreen} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator };