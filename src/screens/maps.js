import React, {useState} from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MapView, {Marker} from 'react-native-maps'

const Maps = () => {
    const [region, setRegion] = useState({
        latitude: -33.4382,
        longitude: -70.6070,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
    })

    return (
    <View style={styles.container}>
        <MapView 
            style={styles.mapStyle}
            region={region}
            onRegionChangeComplete={region => setRegion(region)}
        >
            <Marker coordinate={{ latitude: -33.4367, longitude: -70.6084}} pinColor="blue"/>
        </MapView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
export default Maps;