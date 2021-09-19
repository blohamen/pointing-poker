import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import uniqid from 'uniqid'

import { RootState } from '../../redux/store'

import Avatar from '../Avatar/Avatar'
import AvatarInput from '../AvatarInput/AvatarInput'
import Button from '../Button/Button'
import FormInputText from '../FormInputText/FormInputText'
import Switcher from '../Switcher/Switcher'

import './connect-to-lobby.sass'

interface IConnectToLobbyProps {
  onCancelForm(value: boolean): void
}

export default function ConnectToLobby({ onCancelForm }: IConnectToLobbyProps): JSX.Element {
  const [switchValue, setSwitchValue] = useState<boolean>(false)
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [jobPosition, setJobPosition] = useState<string>('')
  const [srcAva, setSrcAva] = useState<string>('')
  const roomid = useSelector((state: RootState) => state.role.roomId)
  const role = useSelector((state: RootState) => state.role.roleValue)

  const handleSwitchChange = (flag: boolean): void => {
    setSwitchValue(flag)
  }

  const handleChangeFirstName = (name: string) => {
    setFirstName(name)
  }

  const handleChangeLastName = (name: string) => {
    setLastName(name)
  }

  const handleChangeJobPosition = (job: string) => {
    setJobPosition(job)
  }

  const handleChangeAvatar = (src: string) => {
    setSrcAva(src)
  }

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const a: HTMLFormElement = event.currentTarget
    const formData = new FormData(a)
    console.log(formData)
  }

  const handleCancelButton = () => {
    onCancelForm(false)
  }

  return (
    <div className="ctl">
      <div className="ctl__form-wrapper">
        <form id="ctl-form" onSubmit={handleSubmit}>
          <div className="ctl__form-title-wrapper">
            <p className="ctl__title">Connect to lobby</p>
            <Switcher
              title="Connect as Observer"
              defaultValue={switchValue}
              onChangeToogle={handleSwitchChange}
              className="switcher-observer"
            />
          </div>
          {role}
          {roomid}
          <FormInputText
            title="Your first name:"
            name="firstName"
            initialValue={firstName}
            validate
            onValueChange={handleChangeFirstName}
          />

          <FormInputText
            title="Your last name (optional):"
            name="lastName"
            initialValue={lastName}
            validate={false}
            onValueChange={handleChangeLastName}
          />

          <FormInputText
            title="Your job position (optional):"
            name="jobPosition"
            initialValue={jobPosition}
            validate={false}
            onValueChange={handleChangeJobPosition}
          />

          <AvatarInput title="Image" name="addAvatar" onAvaChange={handleChangeAvatar} />
          <Avatar name={firstName} lastName={lastName} src={srcAva} size="large" />
        </form>
        <div className="ctl__btns-wrapper">
          <Link
            onClick={(event) => (!firstName ? event.preventDefault() : null)}
            to={`/lobby?name=${firstName}&room=${role === 'diller' ? uniqid() : roomid}`}
          >
            <button type="submit">submit</button>
          </Link>
          <Button value="Confirm" size="medium" theme="dark" form="ctl-form" />
          <Button value="Cancel" size="medium" theme="light" onSubmit={handleCancelButton} />
        </div>
      </div>
    </div>
  )
}
