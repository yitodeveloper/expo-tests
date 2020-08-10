import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Account = (props) => {
    const {navigation, route} = props;
    const {name, lastname} = route.params;
    return (
        <View style={styles.container}>
            <Text>Estas en account {name} {lastname}</Text>
            <Button title="Ir a Inicio" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Account;