import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AllTicketsScreen from "../screens/AllTicketsScreen";

import About from "../screens/TicketDetail";
import Messages from "../screens/MessageScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();

/**
 * Her bliver begge mine stack navigator implementeret.
 * MainSTackNAvigator er Ticket siden, hvor alle Ticket befinder sig
 * ChatStackNAvigator er message skærmene
 */
const MainStackNavigator = ({route,navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={AllTicketsScreen} options={{headerShown: false}}/>
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