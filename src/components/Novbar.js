import React from "react";
import {View, Text, StyleSheet, Platform} from 'react-native'

export const Novbar = () => {
    return(
        <View style={{ ...Platform.select({
            ios: styles.forViewIos,
            android: styles.forViewAndroid
        })}}>
            <Text style={styles.froText}>Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    forViewAndroid:{
        height:100,
        backgroundColor: '#f0fc',
        alignItems: 'center',
        justifyContent:'flex-end'
    },
    froText:{
        fontSize: 30,
        color: 'white',
    },
    forViewIos: {
        height: 100,
        backgroundColor: '#f0fc',
        alignItems: 'center',
        justifyContent:'flex-end'
    }
})