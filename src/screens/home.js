import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Home = (props) => {

    const {navigation} = props;

    return (
        <View style={styles.container}>
            <Text>Hola soy Home</Text>
            <Button title="Ir a perfil" onPress={() => navigation.navigate('Account', {name: "Rodrigo", lastname:"Ramirez"})} />
            <Button title="Ir a mapas" onPress={() => navigation.navigate('Maps')}/>
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
  });

export default Home;