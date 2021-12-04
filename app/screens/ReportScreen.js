import React from 'react';
import {Text,StyleSheet,View,TextInput,TouchableOpacity} from 'react-native';
import {StatusBar} from "expo-status-bar";

import colors from '../config/colors';
//for at bruge colors.primary og/eller colors.secondary

const ReportScreen = ({}) =>{
    const buttonHasBeenClicked = () => {
        console.log("you have been clicked")
    }
    return (
        <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}> Report an incident now </Text>


            <Text> Whats the issue?</Text>
            <TextInput
                multiline
                placeholder='Be as detailed as possible'
                style={styles.input}
            />
            <View style={styles.drawHorizontalLine}>
            </View>

            <View>
            <TouchableOpacity
                onPress={buttonHasBeenClicked}
                style={styles.roundButton}>
                <Text style={styles.innerFontColor}>Not sure</Text>
            </TouchableOpacity>

                <TouchableOpacity
                    onPress={buttonHasBeenClicked}
                    style={styles.roundButton1}>
                    <Text>Flat tire</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={buttonHasBeenClicked}
                    style={styles.roundButton2}>
                    <Text>Battery issues</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    tasksWrapper: {
        paddingTop: 50,
        paddingHorizontal: 20
    },
    sectionTitle:{
        fontSize: 24,
        fontWeight:"bold"
    },
    input: {
        borderWidth:1,
        borderColor: '#777',
        height:80,
        padding:5,
        margin:10,
        borderRadius:5
    },
    drawHorizontalLine: {
        borderBottomColor:'black',
        borderBottomWidth:StyleSheet.hairlineWidth,
        padding:10
    },
    roundButton: {
        position:'absolute',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'grey',
        top: 40
    },
    roundButton1: {
        position:'absolute',
        width: 110,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#aaaaaa',
        top: 145,
        left: 100
    },
    roundButton2: {
        position:'absolute',
        width: 77,
        height: 77,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#e1e1e2',
        top: 70,
        left: 225,
        bottom: 100
    },
    innerFontColor: {
        color:'white'
    }
});

export default ReportScreen;