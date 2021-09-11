import pageLogo from '../../assets/img/pokerplanning.png'
import './PokerPlanning.sass'

export default function PageLogo(): JSX.Element {
  return (
    <div className="page-logo">
      <div className="page-logo__img">
        <img src={pageLogo} alt="Game Logo" />
      </div>
    </div>
  )
}
