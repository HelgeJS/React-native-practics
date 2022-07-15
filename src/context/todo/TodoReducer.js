import { step0 } from "react-native/Libraries/Animated/Easing"
import { ADD_TODO, CLEAR_ERROR, DELETE_TODO, FETCH_TODO, HIDE_LOADER, SAVE_TODOS, SHOW_ERROR, SHOW_LOADER, } from "../types"

const handlers = {
    [ADD_TODO]: (state, {titles, id}) => ({
        ...state, todo: [...state.todo, {id, titles}]
  }),

    [DELETE_TODO]: (state, {id}) => ({
            ...state,
             todo: state.todo.filter(todo => todo.id !== id)
    }),
    [SAVE_TODOS]: (state, {titles, id}) => ({
        ...state, 
        todo: state.todo.map(todo => {
        if(todo.id === id) {
            todo.titles = titles
        }
        return todo
    })
    }),
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [HIDE_LOADER]: state => ({...state, loading: false}),
    [CLEAR_ERROR]: state => ({...state, error: null}),
    [SHOW_ERROR]: (state, {error}) => ({...state, error}),
    [FETCH_TODO]: (state, {todo}) => ({...state, todo}),
    DEFAULT: state => state
}

export const todoReducer = (state, action) => {
    // switch (action.type) {
    //     case ADD_TODO: return { 
    //         ...state, todo: [...state.todo, {            
    //         id: Date.now().toString(),
    //         titles: action.titles
    //     }]}

    //     case DELETE_TODO: return { 
    //         ...state,
    //          todo: state.todo.filter(todo => todo.id !== action.id)}        
             

    //     case SAVE_TODOS: return { 
    //         ...state, 
    //         todo: state.todo.map(todo => {
    //         if(todo.id === action.id) {
    //             todo.titles = action.titles
    //         }
    //         return todo
    //     })
    // }

    //     case SHOW_LOADER: return {
    //         ...state, loading: true
    //     }

    //     case HIDE_LOADER: return {
    //         ...state, loading: false
    //     }

    //     case CLEAR_ERROR: return {
    //         ...state, error: null
    //     }

        
        // default: return state
    const handler = handlers[action.type] || handlers.DEFAULT
    return   handler(state, action)
    }

