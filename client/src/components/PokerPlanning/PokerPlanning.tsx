import page_logo from '../../assets/img/page-logo.png'
import './PokerPlanning.sass'

export default function PageLogo(): JSX.Element {
  return (
    <div className="page-logo">
      <div className="page-logo__img">
        <img src={page_logo} alt="Game Logo" width="104px" height="104px" />
      </div>
      <div className="page-logo__title">
        <span className="page-logo__title__start">Poker</span>
        <span className="page-logo__title__end">Planning</span>
      </div>
    </div>
  )
}
