import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StyleSheet,View,Image,TouchableOpacity} from 'react-native';

import WelcomeScreen from "../screens/WelcomeScreen";
import ReportScreen from "../screens/ReportScreen";
import MyProfile from "../screens/MyProfile";
import Chat from "../screens/ChatScreen";
import Text from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedText";

const Tab = createBottomTabNavigator();

const customTabBarButton = ({children,onPress}) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems:'center',
            ...styles.shadow
        }}
    onPress={onPress}
    >
        <View style={{
            width:70,
            height:70,
            borderRadius: 35,
            backgroundColor: '#e32f45'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle: {
                position:'absolute',
                bottom:25,
                left:20,
                right:20,
                elevation:0,
                backgroundColor: '#fff',
                borderRadius:15,
                height:90,
                ...styles.shadow
            }
        }}
        >
            <Tab.Screen name="Home" component ={WelcomeScreen}/>
            <Tab.Screen name="Report" component ={ReportScreen}/>
            <Tab.Screen name="Chat" component ={Chat} />
            <Tab.Screen name="Profil" component ={MyProfile} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7f5df0',
        shadowOffset: {
            width: 0,
            height:10
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation: 5
    }
});

export default Tabs;