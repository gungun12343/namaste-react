import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async() => {
        //const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=1003414&catalog_qa=undefined&submitAction=ENTER");
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    if (resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage, avgRating, sla} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return (
        <div className="resmenu">
            <h1>{name}</h1>

            <div className="info">
                <div>
                    <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl3GRCeSEZ9LNlYLPnMcW8NUST6rq8lJ9VA&s" style={{width: "15px", marginRight:"3px"}} />{avgRating} stars</span>
                    <span>{costForTwoMessage}</span>
                </div>
                <h3 className="cuisines">{cuisines.join(", ")}</h3>
                <h3>{sla.slaString}</h3>
            </div>

            <h2 style={{marginTop: "50px"}}>Recommended</h2>
            {/* <ul>
                {itemCards.map((res) => <li>{res.card.info.name}</li>)}
            </ul> */}

            <div className="menu">
                {itemCards.map((res) => (
                    <div className="item" key={res.card.info.id} >
                        <div className="left">
                            <h3>{res.card.info.name}</h3>
                            <h4>{res.card.info.defaultPrice/100 || res.card.info.price/100} Rs.</h4>
                            <p>{res.card.info.description}</p>
                        </div>
                        <div className="right">
                            <img className="item-img" src={CDN_URL+res.card.info.imageId} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu;