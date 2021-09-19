import GameField from '../../components/GameField/GameField'
import './page-404.sass'

export default function Page404(): JSX.Element {
  return (
    <GameField>
      <div className="notFound">
        <div className="notFound__wrapper">
          <div className="notFound__404">
            <h1>
              4<span>0</span>4
            </h1>
          </div>
          <p>
            The page you are looking for might have been removed had its name changed or is temporarily unavailable.
          </p>
          <a href="/">home page</a>
        </div>
      </div>
    </GameField>
  )
}
