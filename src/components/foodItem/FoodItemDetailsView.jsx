import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectFoodItemsDetails, getFoodItemDetails } from "./foodItemSlice";

export default function FoodItemDetailsView() {
    
    let {itemId, type} = useParams(); //Get the value from URL param
    const foodItemDetails = useSelector(selectFoodItemsDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`http://localhost:8000/foodItems/${itemId}`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((finalResponse) => {
            dispatch(getFoodItemDetails(finalResponse))
        })
    }, [])

    
    return (type === 'details') ? 
    (
        <div className="checkbox-container">
            <h3><strong>{foodItemDetails.title}</strong> Details</h3>
            <p><strong>Price:</strong> {foodItemDetails.price}</p>
            <p><strong>Description:</strong> {foodItemDetails.description}</p>
            <Link to="/food-items" class="btn btn-info">Back</Link>
        </div>
    ) : 
    (
        <div className="checkbox-container">
            <h3><strong>{foodItemDetails.title}</strong> Recipe</h3>
            <p><strong>Ingredients:</strong> {foodItemDetails.ingredients}</p>
            <p><strong>Recipe:</strong> {foodItemDetails.preparation}</p>
            <Link to="/food-items" class="btn btn-info">Back</Link>
        </div>
    )
}