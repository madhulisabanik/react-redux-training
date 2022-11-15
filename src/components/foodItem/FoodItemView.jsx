import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import Header from "../Header";
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
    }, [dispatch])

    const handleClick = (event) => {
        let itemId = event.target.id
        window.location.replace(`/food-item/${itemId}/recipe`)
    }

    const foodList = foodItemListData.map((item) => {
        return(
            <div key={item.id}>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to={`/food-item/${item.id}/details`}>{item.title}</Link>
                        <button className="btn btn-primary float-right" id={item.id} onClick={handleClick}>Details</button>
                    </li>
                </ul>
            </div>
        )
    })

    return (
        <>
            <Header />
            <div className="checkbox-container">
                <h2>List of Food Items</h2>
                {foodList}
                <Link to="/" className="btn btn-info">Back</Link>
            </div>
        </>
    )
}