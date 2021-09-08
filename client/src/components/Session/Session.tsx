import { useState } from 'react'
import Button from '../Button/Button';
import FormInputText from '../FormInputText/FormInputText';
import './Session.sass';

export default function Session(): JSX.Element {
    const [connectURI, setConnectURI] = useState<string>('');
    const handleChangeConnectURI = (URI: string) => {
        setConnectURI(URI)
      }

  return (
    <>
      <div className="session">
        <div className="session__create">
          <h1>Start your planning:</h1>
          <span>Create session:</span>
          <Button value="Start new game" size="small" theme="dark" />
        </div>
        <div className="session__join">
          <h1>OR:</h1>
          <span>Connect to lobby by <b>URL</b>:</span>
          <FormInputText
            name="lobby connection url"
            initialValue={connectURI}
            validate={false}
            onValueChange={handleChangeConnectURI}
          />
          <Button value="Connect" size="small" theme="dark" />
        </div>
      </div>
    </>
  )
}
