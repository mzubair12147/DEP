import "./Navbar.css";
import logo from "../assets/Frontend_Assets/logo.png";
import cartIcon from "../assets/Frontend_Assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";

export default function Navbar() {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    return (
        <div className="navbar">
            <div className="nav-logo" alt="logo">
                <img src={logo} />
                <p>Orion</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}>
                    <Link to="/">Shop{menu === "shop" ? <hr /> : <></>}</Link>
                </li>

                <li onClick={() => setMenu("men")}>
                    <Link to="men">Men{menu === "men" ? <hr /> : <></>}</Link>
                </li>
                <li onClick={() => setMenu("women")}>
                    <Link to="women">
                        Women{menu === "women" ? <hr /> : <></>}
                    </Link>
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link to="kids">
                        Kids{menu === "kids" ? <hr /> : <></>}
                    </Link>
                </li>
            </ul>

            <div className="nav-login-cart">
                {localStorage.getItem("auth-token") ? (
                    <button
                        onClick={() => {
                            localStorage.removeItem("auth-token");
                            window.location.replace('/');
                        }}
                    >
                        Log out
                    </button>
                ) : (
                    <Link to="/login-signup">
                        <button>Login</button>
                    </Link>
                )}
                <Link to="/cart">
                    <img src={cartIcon} alt="cart" />
                </Link>

                <div className="nav-cart-counter">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}
