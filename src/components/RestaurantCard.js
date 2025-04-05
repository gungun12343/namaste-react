import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resInfo}) => {
    //const {image, name, avgRating, deliveryTime, costForTwo, cuisines} = resInfo.info;
    const {name, costForTwo, avgRating, cuisines, cloudinaryImageId, sla} = resInfo.info;
    // const deliveryTime = sla.deliveryTime;

    return (
        <div className="res-card">
            <img className="res-img" src={CDN_URL+cloudinaryImageId} />
            <h3 className="res-title">{name}</h3>
            <div className="res-info">
                <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl3GRCeSEZ9LNlYLPnMcW8NUST6rq8lJ9VA&s" style={{width: "15px", marginRight:"3px"}} />{avgRating} stars</span>
                <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3AR1-l8BYseQm6bbYVfzbs_9Dmq-0NpP9A&s" style={{width:"10px"}} />{sla.slaString}</span>
            </div>
            <h4>{costForTwo}</h4>
            <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
        </div>
    )
}

export default RestaurantCard;