import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage, avgRating, sla} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (c) => 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="resmenu flex justify-center items-center flex-col">
            <h1 className="text-3xl font-extrabold mb-5 mt-5">{name}</h1>

            <div className="info border border-solid rounded-xl border-gray-300 w-4/5 md:w-2/4 p-4 shadow-gray-400 shadow-2xl mb-20">
                <div className="flex items-center font-bold text-lg">
                    <span className="flex items-center mr-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl3GRCeSEZ9LNlYLPnMcW8NUST6rq8lJ9VA&s" className="w-[20px] h-[20px] mr-1" />{avgRating} stars</span>
                    <span>{costForTwoMessage}</span>
                </div>
                <h3 className="cuisines font-semibold text-red-500 underline">{cuisines.join(", ")}</h3>
                <h3>{sla.slaString}</h3>
            </div>

            {categories.map((category, index) => (
                <RestaurantCategory 
                    data={category.card?.card} 
                    showItems={index == showIndex ? true : false} 
                    index={index}
                    setShowIndex={setShowIndex}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu;