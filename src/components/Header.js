import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    // useEffect(() => {
    //     console.log("useEffect called");
    // }, [btnNameReact]);

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header h-32 flex items-center justify-between bg-blue-200 shadow-lg mb-5">
            <div className="logo-container">
                <img className="logo w-56 h-32" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4 text-xl font-extrabold">
                    {/* <li className="pr-5 cursor-pointer">
                        Online Status: {onlineStatus ? <span>Online</span> : <span>Offline</span>}
                    </li> */}

                    <li className="pr-5 cursor-pointer ">
                        <Link style={{textDecoration: "none", color:"black"}} to="/">Home</Link>
                    </li>
                    <li className="pr-5 cursor-pointer">
                        <Link style={{textDecoration: "none", color:"black"}} to="/about">About Us</Link>
                    </li>
                    <li className="pr-5 cursor-pointer">
                        <Link style={{textDecoration: "none", color:"black"}} to="/contact">Contact Us</Link>
                    </li>
                    {/* <li className="pr-5 cursor-pointer">Cart</li> */}
                    <li className="pr-5 cursor-pointer">
                        <Link style={{textDecoration: "none", color:"black"}} to="/grocery" >Grocery</Link>
                    </li>
                    <button className="login_btn" onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout"): setBtnNameReact("Login");
                    }} >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;