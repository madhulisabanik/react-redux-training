import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../components/todoSlice'
import foodItemReducer from '../components/foodItem/foodItemSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    foodItems: foodItemReducer
  },
})