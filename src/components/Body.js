import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    //state variable
    const [searchItems, setSearchItems] = useState([]);
    const [searchText, setSearchText] = useState("");

    const listOfRestaurants = useRestaurantList();

    //Conditional rendering
    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return <h1>Looks like you are offline!! Please check your internet connection</h1>
    }

    return listOfRestaurants.length === 0 ? ( <Shimmer /> ) : (
        <div className="body">
            <div className="filter">
                
                <div className="search">
                    <input className="search-box" type="text" placeholder="Search Restaurants" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="search-btn" onClick={() => {
                        const data = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setSearchItems(data);
                    }}>Search</button>
                </div>

                {searchItems.length !== 0 ?
                <button className="back_btn" onClick={() => {
                    setSearchItems([]);
                    setSearchText("");
                }}>Go back</button> : ""}

                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2)
                    setSearchItems(filteredList);
                }}>Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {searchItems.length === 0 ? 
                    listOfRestaurants.map((restaurant) => <Link style={{ textDecoration: 'none' }} key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resInfo={restaurant} /></Link>) : 
                    searchItems.map((res) => <Link style={{ textDecoration: 'none' }} key={res.info.id} to={"/restaurants/"+res.info.id}><RestaurantCard resInfo={res} /></Link>)
                }
            </div>
        </div>
    )
}

export default Body;