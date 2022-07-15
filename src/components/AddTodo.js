import React, {useState} from "react";
import { Feather } from '@expo/vector-icons'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = ({addTodo}) => {
const [inpt, setInpt] = useState('')

    const AddTodo = () => {
        if(inpt.trim()){
        addTodo(inpt)
        setInpt('')
    }else{
        Alert.alert('err')
    }}

        return(
        <View style={styles.forView}>
            <TextInput 
            style={styles.forInput}
            onChangeText={setInpt}
            value={inpt}
            />
            <Feather.Button onPress={AddTodo} name='folder-plus'>
            Добавить
            </Feather.Button>
            {/* <Button title='Add some todo' onPress={AddTodo}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    forView:{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    forInput:{
        width: '60%',
        borderBottomWidth: 1,
        borderColor: `#ff7f50`,
    },
    forButton:{

    }
})