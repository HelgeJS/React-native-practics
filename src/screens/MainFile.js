import React, {useContext, useState} from "react";
import {View, StyleSheet} from 'react-native'
import { Novbar } from "../components/Novbar";
import { THEME } from "./THEME";
 import { FirstScreen } from './FirstScreen';
 import { TwoScreen } from './TwoScreen';
import { TodoContext } from "../context/todo/todoContext";
import { ScreenContext } from "../context/screen/screenContext";

export const MainFile = () => {
    const {todoId} = useContext(ScreenContext)
    // const [some, setSome] = useState(null)
    // const [todo, setTodo] = useState([])

    // const addTodo = (titles) => {
    //     setTodo(prev => [
    //       ...prev, {
    //         id: Date.now().toString(),
    //         titles
    //       }
    //     ])
    //   }
    
    //   const deleteTodo = (todos) => {
    //     Alert.alert(
    //       'Удаление элемента',
    //       `Удалить '${todos.titles}' ?`,
    //     [
    //       {
    //         text: 'Отмена',
    //         style: 'cancel',
    //       },
    //       {text: 'Удалить',style: 'destructive',
    //        onPress: () => {
    //         setSome(null)
    //         setTodo(todo => todo.filter(todo => todo.id !== todos.id))
    //       }
    //     }
    //     ],
    //     {cancelable: false},
    //     )
    //   }
    
    //   const saveTodos = (id, titles) => {
    //     setTodo(old => old.map(todo => {
    //       if (todo.id === id) {
    //         todo.titles = titles
    //       }
    //       return todo
    //     }))
    //   }
    

    

    return(
        <View style={styles.loader}>
        <Novbar />
        <View style={styles.conteiner}>
        {todoId ? <TwoScreen /> : <FirstScreen />}
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
      paddingHorizontal: THEME.PADDING_H,
      paddingVertical: 30,
      flex: 1
    },
    loader: {
      flex: 1
    }
  });
  