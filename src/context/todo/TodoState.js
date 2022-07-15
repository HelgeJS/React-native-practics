import React, { useReducer, useContext } from "react";
import { Alert } from "react-native";
import { ScreenContext } from "../screen/screenContext";
import { ADD_TODO, CLEAR_ERROR, DELETE_TODO, FETCH_TODO, HIDE_LOADER, SAVE_TODOS, SHOW_ERROR, SHOW_LOADER,  } from "../types";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./TodoReducer";

export const TodoState = ({ children }) => {
  const {changeScreen} = useContext(ScreenContext)
    const initialState = {
        todo: [],
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = async titles => {
      const response = await fetch('https://react-native-tr1-default-rtdb.firebaseio.com/todo.json', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({titles})
      })
      const data = await response.json()
      dispatch({type: ADD_TODO, titles, id: data.name })
    }

    const deleteTodo = (id) => {
      const todo = state.todo.find(todo => todo.id === id)
              Alert.alert(
          'Удаление элемента',
          `Удалить '${todo.titles}' ?`,
        [
          {
            text: 'Отмена',
            style: 'cancel',
          },
          {text: 'Удалить',style: 'destructive',
           onPress: async () => {
            changeScreen(null)
            await fetch(`https://react-native-tr1-default-rtdb.firebaseio.com/todo/${id}.json`, {
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'}
            }
          )
            dispatch({type: DELETE_TODO, id})
          }
        }
        ],
        {cancelable: false},
        )
      }

      const fetchTodo = async () => {
        showLoader()
        clearError()
        try {
          const response = await fetch('https://react-native-tr1-default-rtdb.firebaseio.com/todo.json', {
            headers: {'Content-Type' : 'application/json'}
          })
          const data = await response.json()
          const todo = Object.keys(data).map(key => ({ ...data[key], id: key }))
          dispatch({type: FETCH_TODO, todo})
        } catch (error) {
          showError('Somebody error')
          console.warn(error)
        } finally {
          hideLoader()
        }
      }

    const saveTodos = async (id, titles) => {
      await fetch(`https://react-native-tr1-default-rtdb.firebaseio.com/todo/${id}.json`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({titles})
      })
     await dispatch({type: SAVE_TODOS, id, titles})
    }

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const hideLoader = () => dispatch({type: HIDE_LOADER})

    const showError = error => dispatch({type: SHOW_ERROR, error})

    const clearError = () => dispatch({type: CLEAR_ERROR})

  return(
      <TodoContext.Provider value={{
        todo: state.todo,
        loading: state.loading,
        error: state.error,
        addTodo,
        deleteTodo,
        saveTodos,
        fetchTodo
      }}>
          {children}
          </TodoContext.Provider>
  )
}