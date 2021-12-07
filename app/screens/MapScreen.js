import React from 'react';
import {Text,StyleSheet,View,SafeAreaView,Button,TouchableOpacity} from 'react-native';
import Constants from "expo-constants/src/Constants";
import * as Location from 'expo-location';
import {Accuracy} from "expo-location";
import {useState,useEffect} from "react";
import {StatusBar} from "expo-status-bar";

import colors from '../config/colors';
import MapView , {Marker} from "react-native-maps";
//for at bruge colors.primary og/eller colors.secondary

const Map = ({navigation}) =>{
    //instatieringen af alle anvendte statevariabler
    const [hasLocationPermission,setLocationPermission] = useState(false);
    const [currentLocation,setCurrentLocation] = useState(null);
    const [userMarkerCoordinates,setUserMarkerCoordinates] = useState([]);
    const [selectedCoordinate,setSelectedCoordinate] = useState(null);
    const [selectedAddress,setSelectedAddress] = useState(null);

    /*
    Denne aktiverer en forespørgsel om tilladelse til at benytte enhedens position
     */
    const getLocationPermission = async () => {
        await Location.requestForegroundPermissionsAsync().then((item) => {
            setLocationPermission(item.granted)
            }
        );
    };

    useEffect (() =>{
        const response = getLocationPermission()
    })

    const updateLocation = async () => {
           await Location.getCurrentPositionAsync({accuracy: Accuracy.Balanced}).then((item)=>{
               setCurrentLocation(item.coords)
           } );
      };

    const handleLongPress = event => {
          const coordinate = event.nativeEvent.coordinate
          setUserMarkerCoordinates((oldArray) => [...oldArray, coordinate])
     };

    const handleSelectMarker = async coordinate =>{
             setSelectedCoordinate(coordinate)
             await Location.reverseGeocodeAsync(coordinate).then((data) => {
                 setSelectedAddress(data)
             }
     )
      };

     const closeInfoBox = () =>
         setSelectedCoordinate(null) && setSelectedAddress(null)

    const RenderCurrentLocation = (props) => {
        if (props.hasLocationPermission === null) {
          return null;
        }
        if (props.hasLocationPermission === false) {
          return <Text>No location access. Go to settings to change</Text>;
        }
        return (
            <View>
              <Button style title="update location" onPress={updateLocation} />
              {currentLocation && (
                  <Text>
                    {`lat: ${currentLocation.latitude},\nLong:${
                        currentLocation.longitude
                    }\nacc: ${currentLocation.accuracy}`}
                  </Text>
              )}
            </View>
        );
      };

     {
         return (
             <SafeAreaView style={styles.container}>
               <RenderCurrentLocation props={{hasLocationPermission: hasLocationPermission, currentLocation: currentLocation}} />
               <MapView
                   provider="google"
                   style={styles.map}
                   showsUserLocation
                   onLongPress={handleLongPress}>
                 <Marker
                     coordinate={{ latitude: 55.676195, longitude: 12.569419 }}
                     title="Rådhuspladsen"
                 />
                 {userMarkerCoordinates.map((coordinate, index) => (
                     <Marker
                         coordinate={coordinate}
                         key={index.toString()}
                         onPress={() => handleSelectMarker(coordinate)}
                     />
                 ))}
               </MapView>
               {selectedCoordinate && selectedAddress && (
                   <View style={styles.infoBox}>
                     <Text style={styles.infoText}>
                       {selectedCoordinate.latitude}, {selectedCoordinate.longitude}
                     </Text>
                         <Text style={styles.infoText}>
                          name: {selectedAddress[0].name}  region: {selectedAddress[0].region}
                         </Text>
                     <Button title="close" onPress={closeInfoBox} />
                   </View>
               )}
             </SafeAreaView>
         );
       }
     }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    map: { flex: 1 },
    infoBox: {
        height: 200,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    infoText: {
        fontSize: 15,
    },
});

export default Map;