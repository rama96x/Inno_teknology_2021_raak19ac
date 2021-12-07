import React from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import {StatusBar} from "expo-status-bar";

import colors from '../config/colors';
//for at bruge colors.primary og/eller colors.secondary


/**
 * Her parser jeg data fra arrayet i AllTicketsScreen, og viser dem på denne side.
 **/
export default function TicketDetail({route,navigation}) {
    const {item} = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Name: {item.title} </Text>
            <Text>license number: {item.licensplate}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Date created: {item.date}</Text>

            <View style={{flexDirection: 'row',marginTop:150,justifyContent:'space-between'}}>
            <TouchableOpacity style={styles.buttonAccept} onPress={()=> navigation.navigate('Map')}>
            <Text style={{color: 'white'}}>Accept</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    buttonAccept: {
        height: 50,
        width:300,
        backgroundColor: '#e32f45',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
});
