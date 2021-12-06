import React from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import {StatusBar} from "expo-status-bar";

import colors from '../config/colors';
//for at bruge colors.primary og/eller colors.secondary

export default function TestScreen({route,navigation}) {
    const {item} = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Name: {item.title} </Text>
            <Text>licensnummer: {item.licensplate}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Date:{item.date}</Text>

            <TouchableOpacity onPress={()=> alert('You have accepted this from ' + item.title)}>
            <Text>Accept</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
});
