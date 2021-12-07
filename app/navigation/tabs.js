import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StyleSheet,View,Image,TouchableOpacity,Text} from 'react-native';
import {MainStackNavigator,ChatStackNavigator }from './StackNavigator';

import ReportScreen from "../screens/ReportScreen";
import MyProfile from "../screens/MyProfile";
import Map from "../screens/MapScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children,onPress}) => (
    <TouchableOpacity
        style={{
            top:-30,
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
        }}>

            <Tab.Screen
                name="Home"
                component ={MainStackNavigator}
                options={{
                    headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/icons/find_icon.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}/>
                        <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12}}>
                            Find
                        </Text>
                    </View>
                        ),
                        }}/>

                        <Tab.Screen name="Messages" component ={ChatStackNavigator} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/icons/chat_icon.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}/>
                        <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12}}>
                            Messages
                        </Text>
                    </View>
                        ),
                        }}/>

                        <Tab.Screen name="Report" component={ReportScreen} options={{
                            headerShown:false,
                            tabBarIcon: ({focused}) => (
                                <Image source={require('../assets/icons/plus_icon.png')}
                                       resizeMode='contain'
                                       style={{
                                           width: 30,
                                           height: 30,
                                           tintColor: '#fff'
                                       }}
                                />
                            ),
                            tabBarButton: (props) => (
                                <CustomTabBarButton {...props} />
                            )
                        }}/>
                        <Tab.Screen name="Map" component={Map} options={{
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                                    <Image
                                        source={require('../assets/icons/map_icon_1.png')}
                                        resizeMode='contain'
                                        style={{
                                            width: 25,
                                            height: 25,
                                            tintColor: focused ? '#e32f45' : '#748c94'
                                        }}/>
                                    <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12}}>
                                        Map
                                    </Text>
                                </View>
                            ),
                        }}/>
                        <Tab.Screen name="Profile" component={MyProfile} options={{
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                                    <Image
                                        source={require('../assets/icons/User_icon_1.png')}
                                        resizeMode='contain'
                                        style={{
                                            width: 25,
                                            height: 25,
                                            tintColor: focused ? '#e32f45' : '#748c94'
                                        }}/>
                                    <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12}}>
                                        My profile
                                    </Text>
                                </View>
                            ),
                        }}/>
                    </Tab.Navigator>
                );
            };

export default Tabs;

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