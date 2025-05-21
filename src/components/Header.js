import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import UserContext from "../utils/UserContext";

export const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    let [isOpen, setIsOpen] = useState(false);

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="header w-full h-32 flex items-center justify-between bg-blue-200 shadow-lg">
            <div className="logo-container">
                <img className="logo md:w-56 w-48 h-32" src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul className={`absolute rounded-lg  md:z-auto z-[1] md:static right-0 md:flex md:items-center md:my-0 md:pb-0 pb-10 my-7 p-4 text-xl font-extrabold pr-5
                  ${isOpen ? 'top-9':'top-[-500px]'} transition-all duration-500 ease-in`}>
                    {/* <li className="pr-5 cursor-pointer">
                        Online Status: {onlineStatus ? <span>Online</span> : <span>Offline</span>}
                    </li> */}

                    <li className="md:pr-5 py-2 cursor-pointer ">
                        <Link style={{textDecoration: "none", color:"black"}} to="/">Home</Link>
                    </li>
                    <li className="md:pr-5 py-2 cursor-pointer">
                        <Link style={{textDecoration: "none", color:"black"}} to="/about">About Us</Link>
                    </li>
                    <li className="md:pr-5 py-2 cursor-pointer">
                        <Link style={{textDecoration: "none", color:"black"}} to="/contact">Contact Us</Link>
                    </li>
                    <li className="md:pr-5 py-2 cursor-pointer">
                        <Link style={{textDecoration: "none", color:"black"}} to="/grocery" >Grocery</Link>
                    </li>
                    <button className="login_btn md:pr-5 py-2" onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout"): setBtnNameReact("Login");
                    }} >{btnNameReact}</button>
                    <li className="md:pr-5 py-2 font-extrabold">{loggedInUser}</li>
                </ul>
            </div>

            <div className="text-3xl absolute top-6 right-5 md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)} >
                {isOpen ?
                    <FontAwesomeIcon icon={faXmark} /> :
                    <FontAwesomeIcon icon={faBars} />
                }
            </div>
        </div>
    )
}

export default Header;