import RestaurantCard, {withVegLabel} from "./RestaurantCard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    //state variable
    const [searchItems, setSearchItems] = useState([]);
    const [searchText, setSearchText] = useState("");

    const listOfRestaurants = useRestaurantList();

    const VegRestaurantCard = withVegLabel(RestaurantCard);

    //Conditional rendering
    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

    //console.log("body",listOfRestaurants);

    const onlineStatus = useOnlineStatus();

    const { loggedInUser ,setUserName} = useContext(UserContext);

    if(onlineStatus === false) {
        return <h1>Looks like you are offline!! Please check your internet connection</h1>
    }

    return listOfRestaurants.length === 0 ? ( <Shimmer /> ) : (
        <div className="body mt-12">

            <div className="filter mb-2 ml-4 flex gap-4 md:items-center md:flex-row flex-col items-start">
                
                <div className="search">
                    <input className="search-box border-2 border-solid border-black px-2 py-2 rounded-md text-lg w-72 ml-3" type="text" placeholder="Search Restaurants" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="search-btn bg-blue-200 px-4 py-2 text-lg rounded-md ml-3 mt-2" 
                        onClick={() => {
                            const data = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setSearchItems(data);
                        }}>Search</button>
                </div>

                <button className="filter-btn text-blue-400 border-2 border-solid border-blue-200 font-semibold hover:text-white hover:bg-blue-200 px-4 py-2 text-lg rounded-md ml-3" 
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2)
                        setSearchItems(filteredList);
                    }}>Top Rated Restaurants</button>

                {searchItems.length !== 0 ?
                <button className="back_btn ml-3 mb-5 md:mb-0 bg-red-600 px-4 py-2 text-lg rounded-md" onClick={() => {
                    setSearchItems([]);
                    setSearchText("");
                }}>Go back</button> : ""}

                <div>
                    <input 
                        className="search-box border-2 border-solid border-black px-2 py-2 rounded-md text-lg w-72 ml-3" 
                        onChange={(e) => setUserName(e.target.value)}
                        value={loggedInUser}
                        placeholder="Username"
                    />
                </div>
            </div>

            <div className="res-container flex flex-wrap justify-center">
                {searchItems.length === 0 ? 
                    listOfRestaurants.map((restaurant) => 
                    <Link style={{ textDecoration: 'none' }} key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                        {'veg' in restaurant.info ? <VegRestaurantCard resInfo={restaurant} /> : <RestaurantCard resInfo={restaurant} />}
                        {/* <RestaurantCard resInfo={restaurant} /> */}
                    </Link>) 
                    : 
                    searchItems.map((res) => <Link style={{ textDecoration: 'none' }} key={res.info.id} to={"/restaurants/"+res.info.id}><RestaurantCard resInfo={res} /></Link>)
                }
            </div>

            <h1 className="text-center font-bold text-2xl my-5">Copyright @{loggedInUser}</h1>
        </div>
    )
}

export default Body;