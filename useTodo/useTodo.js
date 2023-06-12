import { useReducer } from "react"
import { todoReducerApp } from "./todo-reducerApp"

export const useTodo = (initialState = []) => {
    const [todos, dispatch] = useReducer(todoReducerApp, initialState);

    const handleTodo = function(todo) {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }
    const handleDeleteTodo = function(todo) {
        dispatch({type: '[TODO] remove todo',
        payload: todo.id})
    }
    const handleCrossOut = function(todo) {
        const action = {
            type: '[TODO] Cross out',
            payload: todo.id
        }
        dispatch(action);
    }

    return {
        todos,
        handleTodo,
        handleDeleteTodo,
        handleCrossOut
    }
}
