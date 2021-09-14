import './shirt-game-card.sass'

interface IShirtCardProps {
  url: string
  onChangeShirt(value: string): void
  shirtValue: string
}
export default function ShirtGameCard(props: IShirtCardProps): JSX.Element {
  const handleChangeShirt = (value: string): void => {
    props.onChangeShirt(value)
  }
  const classNameChecked = props.url === props.shirtValue ? 'shirt__checked' : 'shirt__unchecked'
  const classNameLabel = props.url === props.shirtValue ? 'shirt__label shirt__label-active' : 'shirt__label'
  return (
    <div className="shirt__card">
      <img src={props.url} alt="shirt" className="shirt__img" />

      <label className={classNameLabel}>
        <div className={classNameChecked}></div>
        <input
          type="radio"
          value={props.url}
          checked={props.url === props.shirtValue}
          onChange={() => handleChangeShirt(props.url)}
        />
      </label>
    </div>
  )
}
