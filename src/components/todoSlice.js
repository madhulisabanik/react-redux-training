import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoData: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        fetchAllTodos: (state, action) => {
            state.todoData = [...action.payload];
        },
        addNewTodo: (state, action) => {
            console.log(action.payload)
            state.todoData.push(action.payload)
        },
        toggleTodoCheck: (state, action) => {
            const matchedIndex = state.todoData.findIndex((el) => { return el.id === parseInt(action.payload) })
            state.todoData[matchedIndex].isChecked = true;
        }
    }
})


export const selectTodo = (state) => state.todo.todoData;
export const { fetchAllTodos, addNewTodo, toggleTodoCheck } = todoSlice.actions;
export default todoSlice.reducer;