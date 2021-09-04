import PropTypes from 'prop-types';

import { IconContext } from 'react-icons/lib';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

import Card from '../card/card'

import './issue-card.sass'

const Edit = () => <div className="edit"><AiOutlineEdit size={30}/></div>

const Delete = () => 
    <div className="delete">
      <IconContext.Provider
        value={{ color: 'red', size: '30px' }}
      >
        <div>
          <AiOutlineDelete />
        </div>
      </IconContext.Provider>
    </div>


const PropertyCard = () => 
    <div className="property">
      <Edit />
      <Delete />
    </div>

const IssueCard = (props) => {
  const { title, subtitle } = props

  return (
    <div>
      <Card 
        title={title} 
        subtitle={subtitle} 
        right={<PropertyCard />} />
    </div>
  )
}

IssueCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default IssueCard
