import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resInfo}) => {
    //const {image, name, avgRating, deliveryTime, costForTwo, cuisines} = resInfo.info;
    const {name, costForTwo, avgRating, cuisines, cloudinaryImageId, sla} = resInfo.info;
    // const deliveryTime = sla.deliveryTime;

    return (
        <div className="res-card w-[300px] p-3 m-3 bg-blue-100 rounded-lg hover:shadow-2xl hover:bg-blue-200">
            <img className="res-img h-40 w-full rounded-lg" src={CDN_URL+cloudinaryImageId} />
            <h3 className="res-title font-bold text-xl py-2">{name}</h3>
            <div className="res-info pb-1 flex">
                <span className="flex pr-2 items-center" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl3GRCeSEZ9LNlYLPnMcW8NUST6rq8lJ9VA&s" style={{width: "15px", marginRight:"3px"}} className="h-[15px]" />{avgRating} stars</span>
                <span className="flex items-center pl-1" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3AR1-l8BYseQm6bbYVfzbs_9Dmq-0NpP9A&s" style={{width:"10px"}} className="h-[10px]" />{sla.slaString}</span>
            </div>
            <h4 className="pb-1 font-semibold">{costForTwo}</h4>
            <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
        </div>
    )
}

export default RestaurantCard;