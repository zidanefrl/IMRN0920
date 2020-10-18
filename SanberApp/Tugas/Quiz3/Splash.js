import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Register')
        }, 3000)
    }, [])
    //router langsung menuju ke login
    return (
        <View style={styles.container}>
            <View style={styles.containerWrapper}>
                <Image style={{ width: 223, height: 133 }} source={require('./assets/logo.jpg')} />
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    containerWrapper: {
        width: 300,
        height: 300,
        borderRadius: 300 / 2,
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center'
    }
})