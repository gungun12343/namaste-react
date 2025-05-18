import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage, avgRating, sla} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (c) => 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categories);

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

            {/* <h2 className="font-bold mt-10 text-xl" >Recommended({itemCards.length})</h2>

            <div className="menu md:w-2/4 mt-5">
                {itemCards.map((res) => (
                    <div className="item py-5 pl-5 items-center border-b border-solid border-gray-300 mb-5 flex" key={res.card.info.id} >
                        <div className="left w-3/4">
                            <h3 className="font-bold text-lg" >{res.card.info.name}</h3>
                            <h4 className="font-semibold pb-2" >{res.card.info.defaultPrice/100 || res.card.info.price/100} Rs.</h4>
                            <p className="text-gray-800" >{res.card.info.description}</p>
                        </div>
                        <div className="right w-2/5">
                            <img className="item-img w-[200px] h-[200px] rounded-lg" src={CDN_URL+res.card.info.imageId} />
                        </div>
                    </div>
                ))}
            </div> */}

            {categories.map((category) => <RestaurantCategory data={category.card?.card} />)}
        </div>
    )
}

export default RestaurantMenu;