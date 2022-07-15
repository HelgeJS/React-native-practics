import React, {useState} from "react";
import {View, StyleSheet, TextInput, Button, Modal, Alert} from 'react-native'

export const EditModal = ({ visible, cancel, value, onSave }) => {
    const [titles, setTitles] = useState(value)

    const saveTitles = () => {
        if(titles.trim().length < 3) {
            Alert.alert('Error', `Minimal size name 3. Now length ${titles.trim().length}`)
        } else {
            onSave(titles)
        }
    }

    const reCancel = () => { 
        setTitles(value)
        cancel()
    }

    return (
        <Modal visible={visible} animationType='slide'>
        <View style={styles.forView}>
        <TextInput 
        style={styles.forInput} 
        maxLength={10}
        value={titles}
        onChangeText={setTitles}
        />
        <View style={styles.forButtons}>
        <Button title='Отмена' onPress={reCancel}/>
        <Button title='Сохранить' onPress={saveTitles}/>
        </View>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    forView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    forInput:{
        padding:10,
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        width:'80%'
    },
    forButtons: {
        width:'100%',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})