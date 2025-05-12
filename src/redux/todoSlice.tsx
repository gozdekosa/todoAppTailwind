import { createSlice } from '@reduxjs/toolkit'
import type { TodoInitialState, TodoType } from '../types/Types'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState:TodoInitialState = {
    todos: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state:TodoInitialState, action:PayloadAction<TodoType>) => {
        state.todos = [...state.todos, action.payload]
    },
    removeTodoById: (state:TodoInitialState, action:PayloadAction<number>)=>{
        state.todos = [...state.todos.filter((todo:TodoType) => todo.id !== action.payload)]
    },
    updateTodo: (state:TodoInitialState, action:PayloadAction<TodoType>)=>{
        state.todos = [...state.todos.map((todo:TodoType) => todo.id === action.payload.id ? action.payload : todo)]
    }
  },
})

export const { createTodo, removeTodoById, updateTodo } = todoSlice.actions

export default todoSlice.reducer