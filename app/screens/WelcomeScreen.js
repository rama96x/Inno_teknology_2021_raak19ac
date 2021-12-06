import React, {useState} from 'react';
import {Text,StyleSheet,View,FlatList,TouchableOpacity} from 'react-native';
import {StatusBar} from "expo-status-bar";
import TestScreen from "./TestScreen";
import colors from '../config/colors';
//for at bruge colors.primary og/eller colors.secondary

const WelcomeScreen = ({navigation}) =>{
    const [accidents, setAccident] = useState([
        {title: "Ramazan Akbas",licensplate: "BB11222",description:"My tires are flat", date: "12/6/2021",key:'1'},
        {title: "John Doe",licensplate: "AA22333",description:"My tires are flat",date: "12/5/2021", key:'2'},
        {title: "Christopher Nolan",licensplate: "CC33444",description:"My tires are flat", date: "12/3/2021",key:'3'},
        {title: "Brendan Patrick",licensplate: "DD44555",description:"My tires are flat", date: "11/20/2021", key:'4'},
    ]);


    return (
        <View style={styles.container}>
            <FlatList
                data={accidents}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("About",{item})}>
                        <Text>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                )}
            />
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

export default WelcomeScreen;