import { useEffect, useState } from 'react'
import classNames from 'classnames'

import { v4 as uuidv4 } from 'uuid'
import Button from '../../components/Button/Button'
import GameCard from '../../components/GameCard'
import GameField from '../../components/GameField/GameField'
import IssueCard from '../../components/Issue-card'
import IssuesString from '../../components/IssuesString/IssuesString'
import ScramMasterMemberBlock from '../../components/ScramMasterMemberBlock/ScramMasterMemberBlock'
import Timer from '../../components/Timer/Timer'
import IGameSettings from '../../interfaces/IGameSettings'
import { setGameSettings } from '../../store/gameSettingsReducer'
import { useAppDispatch, useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import { GET_GAME_SETTINGS, SET_GAME_SETTINGS } from '../../utils/socketActions'

import './GamePage.sass'

export default function GamePage(): JSX.Element {
  const { roomId, isAdmin, isPlayer } = useAppSelector((state) => state.userParameters)
  const { issues } = useAppSelector((state) => state.issuesParameters)
  const { isTimerNeeded, currentCardSet, scoreTypeShort, currentShirtCards, masterAsPlayer } = useAppSelector(
    (state) => state.gameSettingsParameters
  )
  const { finishVoiting } = useAppSelector((state) => state.appParameters)
  const [currentIssue, setCurrentIssue] = useState<number>(0)
  const handleNextIssue = () => {
    setCurrentIssue(currentIssue + 1)
    setRunRound(false)
  }
  const [roundRun, setRunRound] = useState<boolean>(false)
  const adminIsNotInGame = <h2 className="game__admin-not-in-game">Admin is not in game</h2>

  const dispatch = useAppDispatch()

  useEffect(() => {
    socket.emit(GET_GAME_SETTINGS, roomId)
    const handlerGameSettings = (data: IGameSettings) => {
      dispatch(setGameSettings(data))
    }
    socket.on(SET_GAME_SETTINGS, handlerGameSettings)
    return () => {
      socket.off(SET_GAME_SETTINGS, handlerGameSettings)
    }
  }, [])

  const issueCards = issues.map((issue, index) => {
    return (
      <li
        key={issue.issueId}
        className={classNames('game__issues-card', { 'game__issues-card-active': currentIssue === index })}
      >
        <IssueCard mode="game-issue-card" issueName={issue.title} priority={issue.priority} issueId={issue.issueId} />
      </li>
    )
  })

  const statisticCards = currentCardSet.map((item) => {
    if (item === 'unknow') {
      return (
        <GameCard
          mode="play"
          cardType="unknow"
          cardValue={item}
          cardShirtURL={currentShirtCards}
          storyPointShort={scoreTypeShort}
          finsishVoiting={finishVoiting}
          key={uuidv4()}
        />
      )
    }
    if (item === 'coffee break') {
      return (
        <GameCard
          mode="play"
          cardType="coffee break"
          cardValue={item}
          cardShirtURL={currentShirtCards}
          storyPointShort={scoreTypeShort}
          finsishVoiting={finishVoiting}
          key={uuidv4()}
        />
      )
    }
    return (
      <GameCard
        mode="play"
        cardType="value"
        cardValue={item}
        cardShirtURL={currentShirtCards}
        storyPointShort={scoreTypeShort}
        finsishVoiting={finishVoiting}
        key={uuidv4()}
      />
    )
  })

  const gameCards = currentCardSet.map((cardValue) => {
    if (cardValue === 'unknow') {
      return (
        <GameCard
          mode="playerСhoice"
          cardType="unknow"
          cardValue={cardValue}
          cardShirtURL={currentShirtCards}
          storyPointShort={scoreTypeShort}
          finsishVoiting={finishVoiting}
          key={uuidv4()}
        />
      )
    }
    if (cardValue === 'coffee break') {
      return (
        <GameCard
          mode="playerСhoice"
          cardType="coffee break"
          cardValue={cardValue}
          cardShirtURL={currentShirtCards}
          storyPointShort={scoreTypeShort}
          finsishVoiting={finishVoiting}
          key={uuidv4()}
        />
      )
    }
    return (
      <GameCard
        mode="playerСhoice"
        cardType="value"
        cardValue={cardValue}
        cardShirtURL={currentShirtCards}
        storyPointShort={scoreTypeShort}
        finsishVoiting={finishVoiting}
        key={uuidv4()}
      />
    )
  })

  const timerInIssueBlock = isTimerNeeded ? (
    <div className="game__timer">
      <Timer mode="game" />
    </div>
  ) : (
    ''
  )

  const round = (
    <>
      <div className="game__game-cards">{isPlayer ? gameCards : ''}</div>
      {isAdmin ? <div className="game__game-cards">{masterAsPlayer ? gameCards : adminIsNotInGame}</div> : ''}
    </>
  )

  const handleRunRound = () => {
    setRunRound(true)
  }

  // Admin components
  const buttonsInIssueBlock = isAdmin ? (
    <div className="game__issue-buttons">
      <Button value="Run Round" size="small" theme="dark" onSubmit={handleRunRound} />
      <Button value="Reset Round" size="small" theme="dark" />
      <Button value="Next ISSUE" size="small" theme="dark" onSubmit={handleNextIssue} />
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

      <h2>Game: </h2>
      {roundRun ? round : ''}
    </GameField>
  )
}
