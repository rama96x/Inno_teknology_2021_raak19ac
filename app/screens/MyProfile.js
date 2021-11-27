import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
import {StatusBar} from "expo-status-bar";

import colors from '../config/colors';
//for at bruge colors.primary og/eller colors.secondary

const MyProfile = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <Text>My profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MyProfile;