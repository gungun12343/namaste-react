import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import {addItem, removeItem} from "../utils/cartSlice";

export const ItemList = ({items, label}) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));
    }

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }

    return (
        <div>
            {items.map((res) => (
                <div className="item py-5 pl-5 items-center border-b border-solid border-gray-300 mb-5 flex" key={res.card.info.id} >
                    <div className="left w-3/4">
                        <h3 className="font-bold text-lg" >{res.card.info.name}</h3>
                        <h4 className="font-semibold pb-2" >{res.card.info.defaultPrice/100 || res.card.info.price/100} Rs.</h4>
                        <p className="text-gray-800" >{res.card.info.description}</p>
                    </div>
                    <div className="right w-2/5 relative">
                        <button 
                            onClick={() => label == "ADD" ? handleAddItem(res) : handleRemoveItem(res)}
                            className="absolute md:left-[42px] bottom-[-12px] border border-solid border-gray-300 md:px-10 font-bold text-green-600 rounded-xl py-2 bg-white">
                            {label}
                        </button>
                        <img className="item-img w-[200px] h-[200px] rounded-lg" src={CDN_URL+res.card.info.imageId} />
                    </div>
                </div>
            ))}
        </div>
    )
}