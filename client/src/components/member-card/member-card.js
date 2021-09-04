import PropTypes from 'prop-types';
import { FcCancel } from 'react-icons/fc';
import './member-card.sass'
import db from '../../images/db.png'
import Card from '../card/card';

const Ava = (props) => {
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

Ava.propTypes = { 
  isPhoto: PropTypes.bool.isRequired,
  photoURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isSmall: PropTypes.bool.isRequired
}

const Status = (props) => {
  const { isCancel } = props
  return (<i className="card__status">
  {isCancel === true ? 
  <FcCancel size={30} /> : ''}
</i>)
}

Status.propTypes = {
  isCancel: PropTypes.bool.isRequired
}
 

const MemberCard = (props) => {
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
          isSmall={isSmall} 
          />} />
    </div>
  )
}

MemberCard.propTypes = {
  isCurrentPlayer: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
  isPhoto: PropTypes.bool.isRequired,
  isCancel: PropTypes.bool.isRequired
}

export default MemberCard
