import { GrRestaurant } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "../css/nav-bar.css";

export default function NavBar() {
    const [menuVisibility, setMenuVisibility] = useState(false);
    const toggleMenu = () => {
        setMenuVisibility(() => !menuVisibility);
    }

    return (
        <header>
            <div className="logo-menu-container">
                <div className="logo">
                    <GrRestaurant size={24} color="#333333" />
                    <Link to="/" className="logo-name" color="#333333">Randorant</Link>
                </div>
                <button className="hamburger-menu" onClick={toggleMenu}>{menuVisibility ? (<RxCross1 className="hamburger-icon" />) : (<GiHamburgerMenu className="hamburger-icon" />)}</button>
            </div>
            <nav className={menuVisibility ? "active" : ""}>
                <HashLink smooth to="/randorant-app#how-it-works" className="nav-links">How It Works</HashLink>
                <Link to="/join-room" className="nav-links nav-join-room">Join Room</Link>
                <Link to="/create-room" className="nav-links active">Create Room</Link>
            </nav>
        </header>
    );
}