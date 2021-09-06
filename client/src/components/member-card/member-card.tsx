import { FcCancel } from 'react-icons/fc';
import './member-card.sass'
import db from '../../assets/images/db.png'
import { Card } from '../card/Card';

interface IAva {
  title: string,
  isSmall?: boolean,
  photoURL: string,
  isPhoto?: boolean
}

const Ava: React.FC<IAva> = (props: IAva) => {
  const {isPhoto, photoURL, title, isSmall} = props
  console.log(photoURL)
  let classNameNoPhoto = "card__no-photo"
  let classNamePhoto = "card__photo"
  let classNameInitials = "card__initials"

  if(isSmall){
    classNameNoPhoto = "small-card__no-photo"
    classNamePhoto = "small-card__photo"
    classNameInitials = "small-card__initials"
  }

  return(<div className={classNameNoPhoto}>
  {isPhoto === true ? 
    <img className={classNamePhoto} alt="ava" src={db}/> :
    <span className={classNameInitials}>
      {title[0]}
      {title.substr(title.indexOf(' ')+1)[0]}
    </span>
   }
</div>)
} 

Ava.defaultProps = {
  isSmall: false,
  isPhoto: false
}

interface IStatus {
  isCancel?: boolean,
}

const Status: React.FC<IStatus> = (props: IStatus) => {
  const { isCancel } = props
  return (<i className="card__status">
  {isCancel === true ? 
  <FcCancel size={30} /> : ''}
</i>)
}
Status.defaultProps = {
  isCancel: false,
}
 
interface IMemberCard {
  isCurrentPlayer?: boolean,
  isSmall?: boolean,
  title: string,
  subtitle: string,
  photoURL: string,
  isPhoto?: boolean,
  isCancel?: boolean | undefined
}
const MemberCard: React.FC<IMemberCard> = (props: IMemberCard) => {
  const { isCurrentPlayer, isSmall, title, subtitle, photoURL, isPhoto, isCancel } = props
  return (
    <div>
      <Card 
        isCurrentPlayer={isCurrentPlayer}
        isSmall={isSmall}
        title={title} 
        subtitle={subtitle} 
        left={<Ava 
          isPhoto={isPhoto}
          photoURL={photoURL}
          title={title}
          isSmall={isSmall} 
          />} 
        right={<Status 
          isCancel={isCancel} 
          />} />
    </div>
  )
}

MemberCard.defaultProps = {
  isCurrentPlayer: false,
  isSmall: false,
  isPhoto: false,
  isCancel: false
}
export default MemberCard
