import { useEffect, useState } from "react";

const useRestaurantList = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const data2 = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        //console.log(data2);
        setListOfRestaurants(data2);
    }

    return listOfRestaurants;
}

export default useRestaurantList;