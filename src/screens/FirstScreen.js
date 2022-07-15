import React, {useCallback, useEffect, useState} from "react";
import {View, Text, StyleSheet, FlatList, Image, Dimensions, Button} from 'react-native'
import { useContext } from "react/cjs/react.development";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
import { AppLoader } from "../components/ui/AppLoader";
import { ScreenContext } from "../context/screen/screenContext";
import { TodoContext } from "../context/todo/todoContext";
import { THEME } from "./THEME";

export const FirstScreen = () => {
    const {addTodo, todo, removeTodo, fetchTodo, loading, error} = useContext(TodoContext)
    const {changeScreen} = useContext(ScreenContext)
    const [wid, setWid] = useState(
        Dimensions.get('window').width - THEME.PADDING_H * 2
    )

    const loadTodo = useCallback(async () => await fetchTodo(), [fetchTodo])

    useEffect(() => {
        loadTodo()
    }, [])

    useEffect(() => {
        const update = () => {
          const widh =  Dimensions.get('window').width - THEME.PADDING_H * 2
          setWid(widh)
        }
        Dimensions.addEventListener('change', update)

        return() => {
            Dimensions.removeEventListener('change', update)
        }
    })
    
    if(loading) {
        return <AppLoader />
    } 

    if(error) {
        return <View>
            <Text>
                {error}
            </Text>
            <Button  title='Reload' onPress={loadTodo}/>
        </View>
    }

    let content = (
        <View style={{width: wid}}>
        <FlatList 
        data={todo}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Todo removeTodo={removeTodo} todo={item} onOpen={changeScreen}/>}
        />
        </View>
        )
        if (todo.length === 0) {
            content = 
            <View style={styles.forVievImage}>
                <Image style={styles.forImage} source={require('../../assets/images.jpeg')} resizeMode='contain' />
            </View>
        }

    return(
        <View>
        <AddTodo addTodo={addTodo}/>
        {content}
        </View>
    )
}

const styles = StyleSheet.create({
    forVievImage: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 400,
    },
    forImage: {
        width: '100%',
        height: '100%'
    }
})