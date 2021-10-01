import { useEffect } from 'react'
import Button from '../../components/Button/Button'
import GameCard from '../../components/GameCard'
import GameField from '../../components/GameField/GameField'
import IssueCard from '../../components/Issue-card'
import IssuesString from '../../components/IssuesString/IssuesString'
import ScramMasterMemberBlock from '../../components/ScramMasterMemberBlock/ScramMasterMemberBlock'
import IGameSettings from '../../interfaces/IGameSettings'
import { setGameSettings } from '../../store/gameSettingsReducer'
import store, { useAppDispatch, useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import { GET_GAME_SETTINGS, SET_GAME_SETTINGS } from '../../utils/socketActions'

import './GamePage.sass'

export default function GamePage(): JSX.Element {
  const { roomId } = useAppSelector((state) => state.userParameters)
  const dispatch = useAppDispatch()

  useEffect(() => {
    socket.emit(GET_GAME_SETTINGS, roomId)
    const handlerGameSettings = (data: IGameSettings) => {
      dispatch(setGameSettings(data))
    }
    socket.on(SET_GAME_SETTINGS, handlerGameSettings)
  }, [])

  const state = store.getState()

  const nameIssues = state.issuesParameters.issues.map((issue) => issue.title).join(',')
  const issueCards = state.issuesParameters.issues.map((issue) => {
    return (
      <li className="game__issues-card">
        <IssueCard mode="issueCard" issueName={issue.title} priority={issue.priority} issueId={issue.issueId} />
      </li>
    )
  })

  // Admin components
  const admin = state.userParameters.isAdmin

  const timerInIssueBlock = admin ? <p>time</p> : ''

  const buttonsInIssueBlock = admin ? (
    <div className="game__issue-buttons">
      <Button value="Run Round" size="small" theme="dark" />
      <Button value="Reset Round" size="small" theme="dark" />
      <Button value="Next ISSUE" size="small" theme="dark" />
    </div>
  ) : (
    ''
  )

  const statisticBlock = admin ? (
    <div>
      <h2>Statistics</h2>
      <GameCard mode="setting" cardValue="10" cardShirtURL="" storyPointShort="ST" finsishVoiting />
    </div>
  ) : (
    ''
  )
  // Admin components

  return (
    <GameField>
      <IssuesString issueValues={nameIssues} />

      <div className="game__scram-block">
        <ScramMasterMemberBlock />
        {admin ? <Button value="Start game" size="small" theme="light" /> : ''}
      </div>

      <div className="game__issues-block">
        <h2 className="game__issue-title">Issues:</h2>
        <div className="game__issues">
          <ul className="game__issues-cards">{issueCards}</ul>
          <div className="game__issue-timer-buttons">
            {timerInIssueBlock}
            {buttonsInIssueBlock}
          </div>
        </div>
      </div>

      <div className="game-statistics">{statisticBlock}</div>

      {/* <p>{JSON.stringify(state.appParameters)}</p>
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
      <p>{JSON.stringify(state.userParameters)}</p> */}
    </GameField>
  )
}
