import { CDN_URL } from "../utils/constants";

export const ItemList = ({items}) => {
    console.log(items);
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
                        <button className="absolute left-9 bottom-[-12px] border border-solid border-gray-300 px-10 font-bold text-green-600 rounded-xl py-2 bg-white">ADD</button>
                        <img className="item-img w-[200px] h-[200px] rounded-lg" src={CDN_URL+res.card.info.imageId} />
                    </div>
                </div>
            ))}
        </div>
    )
}