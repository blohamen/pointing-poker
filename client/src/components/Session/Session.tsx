import { useState } from 'react'
import { setIsAdmin, setIsPlayer, setRoomId } from '../../store/authReducer'
import { modalConnectToLobby } from '../../store/reducers'
import { useAppDispatch } from '../../store/redux'
import Button from '../Button/Button'
import FormInputText from '../FormInputText/FormInputText'
import './Session.sass'

export default function Session(): JSX.Element {
  const [connectURI, setConnectURI] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleChangeConnectURI = (URI: string) => {
    setConnectURI(URI)
  }

  const handlerConnectOnSubmit = (e: React.SyntheticEvent) => {
    if (connectURI.length > 0) {
      dispatch(modalConnectToLobby(true))
      dispatch(setIsPlayer(true))
      dispatch(setRoomId(connectURI))
    }
    e.preventDefault()
  }

  const handleStartOnSubmit = () => {
    dispatch(modalConnectToLobby(true))
    dispatch(setIsAdmin(true))
  }

  return (
    <>
      <div className="session">
        <div className="session__create">
          <h1>Start your planning:</h1>
          <div className="session__create__wrapper">
            <span>Create session:</span>
            <Button value="Start new game" size="large" theme="dark" onSubmit={handleStartOnSubmit} />
          </div>
        </div>

        <div className="session__join">
          <h1>OR:</h1>
          <span>
            Connect to lobby by <b>ID</b>:
          </span>
          <FormInputText
            name="lobby connection url"
            initialValue={connectURI}
            validate={false}
            onValueChange={handleChangeConnectURI}
          />
          <Button value="Connect" size="large" theme="dark" onSubmit={handlerConnectOnSubmit} />
        </div>
      </div>
    </>
  )
}
