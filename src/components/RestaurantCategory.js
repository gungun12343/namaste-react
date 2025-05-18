import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { ItemList } from './ItemList';
import { useState } from 'react';

export const RestaurantCategory = ({data}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div className='w-full'>
            <div className="bg-gray-100 w-6/12 m-auto p-4 mb-4 shadow-lg">
                <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                    <span className='text-lg font-bold'>{data.title}({data.itemCards.length})</span>
                    <span>{open ? <FontAwesomeIcon icon={faCaretUp}/> : <FontAwesomeIcon icon={faCaretDown} />}</span>
                </div>
                
                {open ? <ItemList items={data.itemCards} /> : ""}
                {/* <ItemList items={data.itemCards} /> */}
            </div>
        </div>
    )
}