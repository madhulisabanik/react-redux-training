import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    foodItemData: [],
    foodItemDetails: {}
}

export const foodItemSlice = createSlice({
    name: 'foodItems',
    initialState,
    reducers: {
        fetchAllFoodItems: (state, action) => {
            state.foodItemData = [...action.payload]
        },
        getFoodItemDetails: (state, action) => {
            state.foodItemDetails = {...action.payload}
        }
    }
})

export const selectFoodItemsList = (state) => state.foodItems.foodItemData;
export const selectFoodItemsDetails = (state) => state.foodItems.foodItemDetails;
export const { fetchAllFoodItems, getFoodItemDetails } = foodItemSlice.actions;
export default foodItemSlice.reducer;