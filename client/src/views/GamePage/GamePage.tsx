import { useEffect } from 'react'
import classNames from 'classnames'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Button from '../../components/Button/Button'
import GameCard from '../../components/GameCard'
import GameField from '../../components/GameField/GameField'
import IssueCard from '../../components/Issue-card'
import IssuesString from '../../components/IssuesString/IssuesString'
import ScramMasterMemberBlock from '../../components/ScramMasterMemberBlock/ScramMasterMemberBlock'
import Timer from '../../components/Timer/Timer'
import IGameSettings from '../../interfaces/IGameSettings'
import { setStartGame, setStopGame, setRunRound } from '../../store/reducers'
import { setCurrentIssue } from '../../store/issuesReducer'
import { setGameSettings } from '../../store/gameSettingsReducer'
import { useAppDispatch, useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import { GET_GAME_SETTINGS, SET_GAME_SETTINGS } from '../../utils/socketActions'

import './GamePage.sass'
import { setInitialUserState } from '../../store/authReducer'

export default function GamePage(): JSX.Element {
  const dispatch = useAppDispatch()
  const { roomId, isAdmin, isPlayer } = useAppSelector((state) => state.userParameters)
  const { issues, currentIssue } = useAppSelector((state) => state.issuesParameters)
  const { isTimerNeeded, currentCardSet, scoreTypeShort, currentShirtCards, masterAsPlayer } = useAppSelector(
    (state) => state.gameSettingsParameters
  )
  const { finishVoiting, stopGame, runRound } = useAppSelector((state) => state.appParameters)
  const handleNextIssue = () => {
    if (currentIssue < issues.length - 1) {
      dispatch(setCurrentIssue(currentIssue + 1))
    }
    dispatch(setRunRound(false))
  }
  const adminIsNotInGame = <h2 className="game__admin-not-in-game">Admin is not in game</h2>

  const history = useHistory()

  // useEffect(() => {
  //   const handleStopGame = (data: boolean) => {
  //     dispatch(setStopGame(data))
  //   }
  //   socket.once(STATISTIC_GAME, handleStopGame)
  // }, [])

  useEffect(() => {
    if (stopGame) {
      console.log('redirect')
      // history.push('/statistic')
      // необходимые стэйты в редакс выставить в дефолтные положения
    }
  }, [stopGame])

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
    // dispatch(setRunRound(true))
    const flag = true
    socket.emit('runRoundServer', roomId, flag)
  }

  useEffect(() => {
    const handleRunRoundClinet = (flagRunRound: boolean) => {
      console.log(`flagRunround :${flagRunRound}`)
      dispatch(setRunRound(flagRunRound))
    }
    socket.on('runRoundClient', handleRunRoundClinet)
  }, [])

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
        {isAdmin ? (
          <Button
            value="Stop game"
            size="small"
            theme="light"
            onSubmit={() => {
              dispatch(setStartGame(false))
              dispatch(setInitialUserState())
              dispatch(setStopGame(true))
              history.push('/statistic')
              console.log('stop game')
            }}
          />
        ) : (
          ''
        )}
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
      {runRound ? round : ''}
    </GameField>
  )
}
