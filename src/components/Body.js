import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/data";

const Body = () => {
    //state variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.avgRating > 4.2)
                        setListOfRestaurants(filteredList);
                    }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.id} resInfo={restaurant} />)}
            </div>
        </div>
    )
}

export default Body;