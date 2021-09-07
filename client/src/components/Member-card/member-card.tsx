import { FcCancel } from 'react-icons/fc';
import classNames from 'classnames';
import './member-card.sass'
import { Card } from '../Card/Card';

interface IAva {
  title: string,
  isSmall?: boolean,
  photoURL: string,
  isPhoto?: boolean
}

const Ava: React.FC<IAva> = ({isPhoto, photoURL, title, isSmall}: IAva) => 
  (<div className={classNames("classNameNoPhoto", isSmall && "small__no-photo")}>
  {isPhoto === true ? 
    <img className={classNames("classNamePhoto", isSmall && 'small__photo')} alt="ava" src={photoURL}/> :
    <span className={classNames("classNameInitials", isSmall && "small__initials")}>
      {title[0]}
      {title.substr(title.indexOf(' ')+1)[0]}
    </span>
   }
</div>)


Ava.defaultProps = {
  isSmall: false,
  isPhoto: false
}

interface IStatus {
  isCancel?: boolean,
}

const Status: React.FC<IStatus> = ({ isCancel }: IStatus) => (
  <i className="card__status">
    {isCancel === true ? 
    <FcCancel size={30} /> : ''}
  </i>
)
  

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
const MemberCard: React.FC<IMemberCard> = ({ isCurrentPlayer, isSmall, title, subtitle, photoURL, isPhoto, isCancel }: IMemberCard) => (
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
    

MemberCard.defaultProps = {
  isCurrentPlayer: false,
  isSmall: false,
  isPhoto: false,
  isCancel: false
}
export default MemberCard
