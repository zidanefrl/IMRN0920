import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Flexbox = () => {
    return (
        <View>
            <Text style={styles.merah}>Zidane FRL</Text>
        </View>
    )
}

export default Flexbox

const styles = StyleSheet.create({
    merah: {
        color: 'red'
    }
})
