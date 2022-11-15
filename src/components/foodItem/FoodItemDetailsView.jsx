import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import Header from "../Header";
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
    }, [dispatch, itemId])

    
    return (type === 'details') ? 
    (
        <>
            <Header />
            <div className="checkbox-container">
                <h3><strong>{foodItemDetails.title}</strong> Details</h3>
                <img src={`/img/${foodItemDetails.img}`} alt="Cake" height="300px" width="250px" />
                <p><strong>Price:</strong> {foodItemDetails.price}</p>
                <p><strong>Description:</strong> {foodItemDetails.description}</p>
                <Link to="/food-items" className="btn btn-info">Back</Link>
            </div>
        </>
    ) : 
    (
        <>
            <Header />
            <div className="checkbox-container">
                <h3><strong>{foodItemDetails.title}</strong> Recipe</h3>
                <p><strong>Ingredients:</strong> {foodItemDetails.ingredients}</p>
                <p><strong>Recipe:</strong> {foodItemDetails.preparation}</p>
                <Link to="/food-items" className="btn btn-info">Back</Link>
            </div>
        </>
    )
}