import React from "react";
import {
     View,
     Text, 
     StyleSheet, 
     TouchableOpacity, 
     Platform, 
     TouchableNativeFeedback } from 'react-native'
import { useContext } from "react/cjs/react.development";
import { TodoContext } from "../context/todo/todoContext";

export const Todo = ({ todo, onOpen}) => {
    const {deleteTodo} = useContext(TodoContext)


    const Wrapper = Platform.OS === 'android'? TouchableNativeFeedback : TouchableOpacity

    return(
        <Wrapper activeOpacity={0.1} onLongPress={() => deleteTodo(todo.id)} onPress={() => onOpen(todo.id)} >
            <View style={styles.forView}>
                <Text>
                    {todo.titles}
                </Text>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    forView:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth:2,
        borderColor: '#eee',
        marginBottom: 10
    },
})