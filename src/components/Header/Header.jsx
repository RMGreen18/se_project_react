import "./Header.css"
import logo from "../../assets/logo-wtwr.svg"
import avatar from  "../../assets/avatar.png"

function Header() {
    return (<header className="header">
        {/* LOGO */}
        <img src={logo} alt="WTWR logo " className="header__logo" />
        {/* DATE AND PLACE */}
        <p className="header__date-and-loc">Date, Location</p>
        {/* BUTTON(add clothes) */}
        <button className="header__add-btn">+ Add Clothes</button>
        {/* USERNAME */}
        {/* USER AVATAR */}
        <div className="header__user-container">
            <p className="header__user-title">First Last</p>
            <img src={avatar} alt="avatar" className="header__user-avatar" />
        </div>
       
        </header>)
}

export default Header;