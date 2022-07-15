import React, { useState } from "react";
import {View, Text, StyleSheet, Button} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import { EditModal } from "../components/EditModal";
import { AppCard } from "../components/ui/AppCard";
import { useContext } from "react/cjs/react.development";
import { TodoContext } from "../context/todo/todoContext";
import { ScreenContext } from "../context/screen/screenContext";


export const TwoScreen = () => {
    const {todo, saveTodos, deleteTodo} = useContext(TodoContext)
    const {todoId, changeScreen} = useContext(ScreenContext)
    const [modal, setModal] = useState(false)

    const todos = todo.find(t => t.id === todoId)

    const saveTodo = (titles) => {
        saveTodos(todos.id, titles)
        setModal(false)
    }

    return(
        <View>
            <EditModal visible={modal} 
             cancel={() => setModal(false)}
             value={todos.titles}
             onSave={saveTodo}
             />
            <AppCard style={styles.forCard}>
            <Text style={styles.title}>{todos.titles}</Text>
            <FontAwesome name="edit" size={30} onPress={() => setModal(true)}/>
            </AppCard>

            <View style={styles.forButtons}>
                <View style={styles.buttons}>
            <Button title='Back' color='#ff8c00' onPress={() => changeScreen(null)} />
                </View>
                <View style={styles.buttons}>
            <Button title='Delete'
             color='#ff0000' 
             onPress={() => deleteTodo(todos.id)} />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    forButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    forCard: {
        marginBottom: 20,
        padding: 15
    },
    buttons: {
        width: '40%'
    },
    title:{
        fontSize: 26
    }
})