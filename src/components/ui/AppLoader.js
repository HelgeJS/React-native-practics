import React from "react";
import {StyleSheet, View, ActivityIndicator} from 'react-native'

export const AppLoader = () => {
    return(
    <View style={style.center}>
        <ActivityIndicator  size='large' color='red'/>
    </View>
    )
}

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})