import React from 'react'
import Card from '../Card'
import './ProgressCard.sass'

interface IProgressCard {
  progress: string
}

const ProgressCard = ({ progress }: IProgressCard): JSX.Element => {
  return <Card title={progress} subtitle="" isChatCard />
}

export default ProgressCard
