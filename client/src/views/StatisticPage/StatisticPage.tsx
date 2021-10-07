import { useAppSelector } from '../../store/redux'
import './StatisticPage.sass'
import GameField from '../../components/GameField/GameField'

const StatisticPage = () => {
  const { rounds } = useAppSelector((state) => state.membersParameters)
  // const testRound = rounds.map((item) => {
  //   return item.score
  // })
  const testRound = rounds.map((item) => (
    <div>
      SCore : {item.score}
      UserId : {item.userId}
    </div>
  ))

  return (
    <GameField>
      <>
        <h2>StatisticPage</h2>
        {testRound}
      </>
    </GameField>
  )
}

export default StatisticPage

// import React from 'react'
// import { v4 as uuidv4 } from 'uuid'

// import { useAppSelector } from '../../store/redux'

// import GameCard from '../../components/GameCard'
// import IssueCard from '../../components/Issue-card'

// import './StatisticPage.sass'
// import GameField from '../../components/GameField/GameField'

// const StatisticPage = () => {
//   const { currentCardSet, scoreTypeShort, currentShirtCards } = useAppSelector((state) => state.gameSettingsParameters)
//   const { finishVoiting } = useAppSelector((state) => state.appParameters)

//   const statisticCards = currentCardSet.map((item) => {
//     if (item === 'unknow') {
//       return (
//         <GameCard
//           mode="play"
//           cardType="unknow"
//           cardValue={item}
//           cardShirtURL={currentShirtCards}
//           storyPointShort={scoreTypeShort}
//           finsishVoiting={finishVoiting}
//           key={uuidv4()}
//         />
//       )
//     }
//     if (item === 'coffee break') {
//       return (
//         <GameCard
//           mode="play"
//           cardType="coffee break"
//           cardValue={item}
//           cardShirtURL={currentShirtCards}
//           storyPointShort={scoreTypeShort}
//           finsishVoiting={finishVoiting}
//           key={uuidv4()}
//         />
//       )
//     }
//     return (
//       <GameCard
//         mode="play"
//         cardType="value"
//         cardValue={item}
//         cardShirtURL={currentShirtCards}
//         storyPointShort={scoreTypeShort}
//         finsishVoiting={finishVoiting}
//         key={uuidv4()}
//       />
//     )
//   })

//   return (
//     <GameField>
//       <div className="statistic-page">
//         <h2>StatisticPage</h2>
//         <div className="statistic-page">
//           <IssueCard
//             mode="game-issue-card"
//             issueName="{issue.title}"
//             priority="{issue.priority}"
//             issueId="{issue.issueId}"
//           />
//           <div className="game__statistic-cards">{statisticCards}</div>
//         </div>
//       </div>
//     </GameField>
//   )
// }

// export default StatisticPage
