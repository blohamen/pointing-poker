import { useEffect } from 'react'
import GameField from '../../components/GameField/GameField'
import IGameSettings from '../../interfaces/IGameSettings'
import { setGameSettings } from '../../store/gameSettingsReducer'
import store, { useAppDispatch, useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import { GET_GAME_SETTINGS, SET_GAME_SETTINGS } from '../../utils/socketActions'

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
  return (
    <GameField>
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
