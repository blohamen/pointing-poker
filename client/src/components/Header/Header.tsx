import './Header.sass'
import logo from '../../assets/img/logo.png'
import menu from '../../assets/img/menu.png'

export default function Header(): JSX.Element {
  return (
    <header>
      <div className="header-container">
        <div className="header-container__logo">
          <a href="/">
            <img src={logo} alt="Poking Poker Logo" />
          </a>
        </div>
        <div className="header-container__menu">
          <img src={menu} alt="Menu" />
        </div>
      </div>
    </header>
  )
}
