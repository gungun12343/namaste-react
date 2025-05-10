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
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? <span>Online</span> : <span>Offline</span>}
                    </li>

                    <li>
                        <Link style={{textDecoration: "none", color:"black"}} to="/">Home</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: "none", color:"black"}} to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: "none", color:"black"}} to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <li>
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