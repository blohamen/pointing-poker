import { useEffect } from 'react'
import Button from '../../components/Button/Button'
import GameCard from '../../components/GameCard'
import GameField from '../../components/GameField/GameField'
import IssueCard from '../../components/Issue-card'
import IssuesString from '../../components/IssuesString/IssuesString'
import ScramMasterMemberBlock from '../../components/ScramMasterMemberBlock/ScramMasterMemberBlock'
import Timer from '../../components/Timer/Timer'
import IGameSettings from '../../interfaces/IGameSettings'
import { setGameSettings } from '../../store/gameSettingsReducer'
import store, { useAppDispatch, useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import { GET_GAME_SETTINGS, SET_GAME_SETTINGS } from '../../utils/socketActions'

import './GamePage.sass'

export default function GamePage(): JSX.Element {
  const { roomId, isAdmin, isPlayer } = useAppSelector((state) => state.userParameters)
  const { issues } = useAppSelector((state) => state.issuesParameters)
  const { currentCardSet } = useAppSelector((state) => state.gameSettingsParameters)

  const dispatch = useAppDispatch()
  const state = store.getState()

  useEffect(() => {
    socket.emit(GET_GAME_SETTINGS, roomId)
    const handlerGameSettings = (data: IGameSettings) => {
      dispatch(setGameSettings(data))
    }
    socket.on(SET_GAME_SETTINGS, handlerGameSettings)
  }, [])

  const issueCards = issues.map((issue) => {
    return (
      <li className="game__issues-card">
        <IssueCard mode="issueCard" issueName={issue.title} priority={issue.priority} issueId={issue.issueId} />
      </li>
    )
  })

  const statisticCards = currentCardSet.map((cardValue) => {
    return <GameCard mode="play" cardValue={cardValue} cardShirtURL="" storyPointShort="ST" finsishVoiting={false} />
  })

  const gameCards = currentCardSet.map((cardValue) => {
    return <GameCard mode="play" cardValue={cardValue} cardShirtURL="" storyPointShort="ST" finsishVoiting={false} />
  })

  // Admin components
  const timerInIssueBlock = isAdmin ? (
    <div>
      <Timer mode="setting" />
    </div>
  ) : (
    ''
  )

  const buttonsInIssueBlock = isAdmin ? (
    <div className="game__issue-buttons">
      <Button value="Run Round" size="small" theme="dark" />
      <Button value="Reset Round" size="small" theme="dark" />
      <Button value="Next ISSUE" size="small" theme="dark" />
    </div>
  ) : (
    ''
  )

  const statisticBlock = isAdmin ? (
    <div>
      <h2>Statistics</h2>
      <div className="game__statistic-cards">{statisticCards}</div>
    </div>
  ) : (
    ''
  )
  // Admin components

  return (
    <GameField>
      <IssuesString />
      <div className="game__scram-block">
        <ScramMasterMemberBlock />
        {isAdmin ? <Button value="Start game" size="small" theme="light" /> : ''}
        {isPlayer ? <Button value="Exit" size="small" theme="light" /> : ''}
      </div>

      <div className="game__issues-block">
        {isAdmin ? <h2 className="game__issue-title">Issues:</h2> : ''}
        <div className="game__issues">
          <ul className="game__issues-cards">{issueCards}</ul>
          <div className="game__issue-timer-buttons">
            {timerInIssueBlock}
            {buttonsInIssueBlock}
          </div>
        </div>
      </div>

      <div className="game__statistics">{statisticBlock}</div>
      <h2>Game</h2>
      <div className="game__game-cards">{gameCards}</div>
      <p>{JSON.stringify(state.appParameters)}</p>
      <br />
      <p>{JSON.stringify(state.gameSettingsParameters)}</p>
      <br />
      <p>{JSON.stringify(state.chatParameters)}</p>
      <br />
      <p>{JSON.stringify(state.issuesParameters)}</p>
      <br />
      <p>{JSON.stringify(state.kickMemberParameters)}</p>
      <br />
      <p>{JSON.stringify(state.membersParameters)}</p>
      <br />
      <p>{JSON.stringify(state.userParameters)}</p>
    </GameField>
  )
}

// statistics
// from redux
// timer

// start game
// cards :
// admin  +
// player  +
// observer +

// run round
// cards :
// admin  +
// player  +
// observer -
