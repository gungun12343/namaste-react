import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 







{/* <RestaurantCard cuisine="Bakery, Ice cream" 
                    resname="Bakery World" 
                    image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mt2aggiscfl3yviatwng"
                    rating={4.4}
                />
                <RestaurantCard cuisine="Biryani, North Indian, Asian" resname="Meghana food" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/yiiln3ntc7cwm51l9lhi" />
                 */}