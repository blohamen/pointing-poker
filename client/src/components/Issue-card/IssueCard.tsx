import { IconContext } from 'react-icons/lib';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

import Card from "../Card"

import './issue-card.sass'

const Edit = () => <div className="edit"><AiOutlineEdit size={30}/></div>

const Delete = () => (
  <div className="delete">
    <IconContext.Provider
      value={{ color: 'red', size: '30px' }}
    >
      <div>
        <AiOutlineDelete />
      </div>
    </IconContext.Provider>
  </div>
)
    


const PropertyCard = () => ( 
  <div className="property">
    <Edit />
    <Delete />
  </div>
)
   

interface IIssueCard {
  title: string,
  subtitle: string
}

export const IssueCard: React.FC<IIssueCard> = ({ title, subtitle }: IIssueCard) => (
  <div>
    <Card 
      title={title} 
      subtitle={subtitle} 
      right={<PropertyCard />} />
  </div>

)