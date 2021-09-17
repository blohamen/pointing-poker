import { useState } from 'react'
import { sendPersonData, setIsAdmin, setIsObserver, setIsPlayer } from '../../store/authReducer'
import { useAppDispatch, useAppSelector } from '../../store/redux'
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
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [jobPosition, setJobPosition] = useState<string>('')
  const [srcAva, setSrcAva] = useState<string>('')

  const { isAdmin, isObserver, isPlayer, userId, roomId } = useAppSelector((state) => state.userParameters)
  const dispatch = useAppDispatch()

  const handleSwitchChange = (flag: boolean): void => {
    dispatch(setIsObserver(flag))
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

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    const personForm: HTMLFormElement = event.currentTarget
    const formData = new FormData(personForm)
    formData.append('isObserver', isObserver.toString())
    formData.append('isAdmin', isAdmin.toString())
    formData.append('isPlayer', isPlayer.toString())
    formData.append('userID', userId.toString())
    formData.append('roomID', roomId.toString())
    dispatch(sendPersonData({ data: formData }))
  }

  const handleCancelButton = () => {
    onCancelForm(false)
    dispatch(setIsAdmin(false))
    dispatch(setIsPlayer(false))
    dispatch(setIsObserver(false))
  }

  return (
    <div className="ctl">
      <div className="ctl__form-wrapper">
        <div className="ctl__form-title-wrapper">
          <p className="ctl__title">Connect to lobby</p>
          {!isAdmin ? (
            <Switcher
              title="Connect as Observer"
              defaultValue={isObserver}
              onChangeToogle={handleSwitchChange}
              className="switcher-observer"
            />
          ) : (
            ''
          )}
        </div>
        <form id="ctl-form" onSubmit={handleSubmit}>
          <div className="ctl__form-elements">
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
          </div>

          <div className="ctl__btns-wrapper">
            <Button value="Confirm" size="medium" theme="dark" form="ctl-form" />
            <Button value="Cancel" size="medium" theme="light" onSubmit={handleCancelButton} />
          </div>
        </form>
      </div>
    </div>
  )
}
