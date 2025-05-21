import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { ItemList } from './ItemList';
import { useState } from 'react';

export const RestaurantCategory = ({data, showItems, index, setShowIndex}) => {
    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        //setShowItems(!showItems);
        let newIndex = showItems ? null : index;
        setShowIndex(newIndex);
    }

    return (
        <div className='w-full'>
            <div className="bg-gray-100 w-6/12 m-auto p-4 mb-4 shadow-lg">
                <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                    <span className='text-lg font-bold'>{data.title}({data.itemCards.length})</span>
                    <span>{showItems ? <FontAwesomeIcon icon={faCaretUp}/> : <FontAwesomeIcon icon={faCaretDown} />}</span>
                </div>
                
                {showItems ? <ItemList items={data.itemCards} /> : ""}
            </div>
        </div>
    )
}