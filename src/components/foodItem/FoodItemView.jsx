import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { selectFoodItemsList, fetchAllFoodItems } from "./foodItemSlice"

export default function FoodItemView() {
    
    const foodItemListData = useSelector(selectFoodItemsList);
    const dispatch = useDispatch()
    
    useEffect(() => {
        fetch('http://localhost:8000/foodItems', {
            method: 'GET'
        })
        .then((response) =>  response.json())
        .then((finalResponse) => {
            dispatch(fetchAllFoodItems([...finalResponse]))
        })
    }, [])

    const handleClick = (event) => {
        let itemId = event.target.id
        window.location.replace(`/food-item/${itemId}/recipe`)
    }

    const foodList = foodItemListData.map((item) => {
        return(
            <div key={item.id}>
                <ul class="list-group">
                    <li class="list-group-item">
                        <Link to={`/food-item/${item.id}/details`}>{item.title}</Link>
                        <button class="btn btn-primary float-right" id={item.id} onClick={handleClick}>Details</button>
                    </li>
                </ul>
            </div>
        )
    })

    return (
        <div className="checkbox-container">
            <h2>List of Food Items</h2>
            {foodList}
            <Link to="/" class="btn btn-info">Back</Link>
        </div>
    )
}