import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import * as Battery from 'expo-battery';

const Home = (props) => {

    const {navigation} = props;
    const [batteryLevel, setBatteryLevel] = useState(null)

    useEffect(() => {
      flushBatteryLevel()
      const suscription = Battery.addBatteryLevelListener((batteryState) => {
        console.log(batteryState)
        setBatteryLevel(batteryState.batteryLevel)
      })
      return () => {
        suscription.remove();
      }
    }, [])

    const flushBatteryLevel = async () => {
      const battery = await Battery.getBatteryLevelAsync();
      setBatteryLevel(battery)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>DemoApp</Text>
            <Text style={styles.batteryText}>Estado de la bateria: {Math.round(batteryLevel*100)|| 0}%</Text>
            <View style={styles.buttonContainer}>
              <Button  title="Ir a perfil" onPress={() => navigation.navigate('Account', {name: "Rodrigo", lastname:"Ramirez"})} />
              <Button  title="Actualizar bateria" onPress={flushBatteryLevel}/>
              <Button  title="Ir a mapas" onPress={() => navigation.navigate('Maps')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 40,
      marginBottom: 30,
    },
    batteryText: {
      fontSize: 20,
      marginBottom: 30,
    },
    buttonContainer: {
      padding: 10,
      flex: 1,
      flexDirection: "row",
      width: '100%',
      justifyContent: 'space-around',
      maxHeight: 60,
    }
  });

export default Home;