import "./Header.css"
import logo from "../../assets/logo.svg"
import avatar from  "../../assets/avatar.png"

function Header({ weatherData }) {
    const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric'});
    return (<header className="header">
        <img src={logo} alt="WTWR logo " className="header__logo" />
        <p className="header__date-and-loc">{ currentDate }</p>
        <button className="header__add-btn">+ Add Clothes</button>
        <div className="header__user-container">
            <p className="header__user-title">Terrence Tegegne</p>
            <img src={avatar} alt="avatar" className="header__user-avatar" />
        </div>
       
        </header>)
}

export default Header;