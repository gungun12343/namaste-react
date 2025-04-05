const Shimmer = () => {
    return (
        <div>
            {/* <div className="shimmer-btn-con">
                    <button 
                        className="shimmer-btn" 
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2)
                            setListOfRestaurants(filteredList);
                        }}
                    ></button>
            </div> */}
            <div className="shimmer-container">
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
            </div>
        </div>
    )
}

export default Shimmer;