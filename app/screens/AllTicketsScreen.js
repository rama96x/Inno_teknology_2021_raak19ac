import React, {useState} from 'react';
import {Text,StyleSheet,View,FlatList,TouchableOpacity} from 'react-native';
import {StatusBar} from "expo-status-bar";
import TicketDetail from "./TicketDetail";
import colors from '../config/colors';
//for at bruge colors.primary og/eller colors.secondary

const AllTicketsScreen = ({navigation}) =>{
    const [accidents, setAccident] = useState([
        {title: "Ramazan Akbas",licensplate: "BB11222",description:"My tires are flat", date: new Date().toDateString(),key:'1'},
        {title: "Leonardo da Vinci",licensplate: "AA22333",description:"I think there is some battery issues",date: new Date().toDateString(), key:'2'},
        {title: "Christopher Nolan",licensplate: "CC33444",description:"My car just stopped moving", date: new Date().toDateString(),key:'3'},
        {title: "Brendan Patrick",licensplate: "DD44555",description:"My tires are flat", date: new Date().toDateString(), key:'4'},
        {title: "Jenny Doe",licensplate: "EE55444",description:"My tires are flat", date: new Date().toDateString(), key:'5'},
    ]);


    /**
     * Flatlist itererer igennem min useState, uden at jeg behøver at targete hver key.
     * Item er de individuelle item's i arrayet, som itereres igennem
     */
    return (
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
            <Text style={styles.sectionTitle}>All existing tickets nearby</Text>
            <FlatList
                data={accidents}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("About",{item})}>
                        <Text style={styles.item}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal:20
    },
    item: {
        marginTop: 22,
        padding: 30,
        backgroundColor: '#e32f45',
        fontSize: 20,
        marginHorizontal: 10
    },
    sectionTitle: {
        fontSize:24,
        fontWeight:'bold'
    },
});

export default AllTicketsScreen;