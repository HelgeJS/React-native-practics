import React, {useState} from 'react';
// import { StyleSheet, View, Alert, Button} from 'react-native';
// import { THEME } from './src/screens/THEME';

// import { Novbar } from './src/components/Novbar';
// import { FirstScreen } from './src/screens/FirstScreen';
// import { TwoScreen } from './src/screens/TwoScreen';
import { MainFile } from './src/screens/MainFile';
import { TodoState } from './src/context/todo/TodoState';
import {ScreenState} from './src/context/screen/ScreenState'



export default function App() {

  // const [todo, setTodo] = useState([])
  // const [some, setSome] = useState(null)

  // const addTodo = (titles) => {
  //   setTodo(prev => [
  //     ...prev, {
  //       id: Date.now().toString(),
  //       titles
  //     }
  //   ])
  // }

  // const deleteTodo = (todos) => {
  //   Alert.alert(
  //     'Удаление элемента',
  //     `Удалить '${todos.titles}' ?`,
  //   [
  //     {
  //       text: 'Отмена',
  //       style: 'cancel',
  //     },
  //     {text: 'Удалить',style: 'destructive',
  //      onPress: () => {
  //       setSome(null)
  //       setTodo(todo => todo.filter(todo => todo.id !== todos.id))
  //     }
  //   }
  //   ],
  //   {cancelable: false},
  //   )
  // }

  // const saveTodos = (id, titles) => {
  //   setTodo(old => old.map(todo => {
  //     if (todo.id === id) {
  //       todo.titles = titles
  //     }
  //     return todo
  //   }))
  // }

  //  let Scren = (
  //   <FirstScreen  todo={todo} addTodo={addTodo} deleteTodo={deleteTodo} onOpen={(id) => setSome(id)}/>
  // )

  // if (some) {
  //   const finderTodo = todo.find(todos => todos.id === some)
  //   Scren = <TwoScreen onRemove={deleteTodo} todo={finderTodo} goBack={() => setSome(null)} onSave={saveTodos}/>
  // }

  return (
    // <View>
    //   <Novbar />
    //   <View style={styles.conteiner}>
    //   {Scren}
    //   </View>
    // </View>
    <ScreenState>
    <TodoState>
    <MainFile />
    </TodoState>
    </ScreenState>
  );
}

// const styles = StyleSheet.create({
//   conteiner: {
//     paddingHorizontal: THEME.PADDING_H,
//     paddingVertical: 30
//   }
// });
