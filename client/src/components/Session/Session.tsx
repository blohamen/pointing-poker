import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { diller, player } from '../../features/role/roleSlice'
// import Button from '../Button/Button'
import FormInputText from '../FormInputText/FormInputText'
import './Session.sass'

interface ISessionProps {
  onSubmitStartGame(): void
}

export default function Session(props: ISessionProps): JSX.Element {
  const [connectURI, setConnectURI] = useState<string>('')
  const dispatch = useDispatch()

  const handleChangeConnectURI = (URI: string) => {
    setConnectURI(URI)
    dispatch(player(URI))
    // dispatch(observer(URI))
  }

  const dillerRoleForm = () => {
    props.onSubmitStartGame()
    dispatch(diller())
  }

  const playerRoleForm = () => {
    props.onSubmitStartGame()
    // dispatch(player())
  }

  return (
    <>
      <div className="session">
        <div className="session__create">
          <h1>Start your planning:</h1>
          <div className="session__create__wrapper">
            <span>Create session:</span>
            {/* <Button value="Start new game" size="large" theme="dark" onSubmit={props.onSubmitStartGame} /> */}
            <button type="button" onClick={dillerRoleForm}>
              start new game
            </button>
          </div>
        </div>

        <div className="session__join">
          <h1>OR:</h1>
          <span>
            Connect to lobby by <b>URL</b>:
          </span>
          <FormInputText
            name="lobby connection url"
            initialValue={connectURI}
            validate={false}
            onValueChange={handleChangeConnectURI}
          />
          {/* <Button value="Connect" size="large" theme="dark" /> */}
          <button type="button" onClick={playerRoleForm}>
            connect
          </button>
        </div>
      </div>
    </>
  )
}
