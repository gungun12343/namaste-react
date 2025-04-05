import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    //state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchItems, setSearchItems] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const data2 = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        //const data2 = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        //console.log(data2);
        setListOfRestaurants(data2);
    }

    //Conditional rendering
    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

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
                    listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.id} resInfo={restaurant} />) : 
                    searchItems.map((res) => <RestaurantCard key={res.id} resInfo={res} />)
                }
            </div>
        </div>
    )
}

export default Body;