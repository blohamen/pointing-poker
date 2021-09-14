import { useState } from 'react'
import Button from '../Button/Button'
import FormInputText from '../FormInputText/FormInputText'
import './Session.sass'

interface ISessionProps {
  onSubmitStartGame(): void
}

export default function Session(props: ISessionProps): JSX.Element {
  const [connectURI, setConnectURI] = useState<string>('')

  const handleChangeConnectURI = (URI: string) => {
    setConnectURI(URI)
  }

  return (
    <>
      <div className="session">
        <div className="session__create">
          <h1>Start your planning:</h1>
          <div className="session__create__wrapper">
            <span>Create session:</span>
            <Button value="Start new game" size="large" theme="dark" onSubmit={props.onSubmitStartGame} />
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
          <Button value="Connect" size="large" theme="dark" />
        </div>
      </div>
    </>
  )
}
