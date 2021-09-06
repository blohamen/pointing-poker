import "./header.sass";
import logo from "../../../../assets/img/logo.png";
import menu from "../../../../assets/img/menu.png";

export default function Header() {
    return (
      <header>
        <div className="header-container">
          <div className="header-container__logo">
            <img src={logo} alt="Poking Poker Logo" width="70px" height="70px"/>
          </div>
          <div className="header-container__menu">
            <img src={menu} alt="Menu" width="19px" height="14px"/>
          </div>
        </div>
      </header>
    )
  }
  