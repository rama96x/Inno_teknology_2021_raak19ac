import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import About from "../screens/TestScreen";
import Messages from "../screens/FindTicketsScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();

const MainStackNavigator = ({route,navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={WelcomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="About" component={About} options={{
                headerBackTitleVisible: false
            }}/>
        </Stack.Navigator>
    );
}

const ChatStackNavigator = ({}) =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Message" component={Messages} options={{headerShown:false}}/>
            <Stack.Screen name="Chat" component={ChatScreen} options={{
                headerBackTitleVisible:false
            }}/>
        </Stack.Navigator>
    )
}

export { MainStackNavigator,ChatStackNavigator };