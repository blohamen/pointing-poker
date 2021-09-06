import { useState } from 'react'
import Avatar from '../Avatar/Avatar'
import AvatarInput from '../AvatarInput/AvatarInput'
import Button from '../Button/Button'
import FormInputText from '../FormInputText/FormInputText'
import Switcher from '../Switcher/Switcher'
import './connect-to-lobby.sass'

export default function ConnectToLobby(): JSX.Element {
    const [switchValue, setSwitchValue] = useState<boolean>(false)
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [jobPosition, setJobPosition] = useState<string>('')
    const [srcAva, setSrcAva] = useState<string>('')

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

    const handleChangeAva = (src: string) => {
        setSrcAva(src)
    }

    return (
        <div className="ctl">
            <div className="ctl__form-wrapper">
                <p className="ctl__title">Connect to lobby</p>
                <Switcher 
                    title='Connect as Observer' 
                    defaultValue={switchValue} 
                    onChangeToogle={handleSwitchChange}
                    className="switcher-observer"
                />

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

                <AvatarInput 
                    title="Image"
                    name="addAvatar"
                    onAvaChange={handleChangeAva}
                />

                <Avatar 
                    name={firstName} 
                    lastName={lastName}
                    src={srcAva}
                />

                <Button 
                    value="Confirm"
                    size="medium"
                    theme="dark"
                />

                <Button 
                    value="Cancel"
                    size="medium"
                    theme="light"
                />
            </div>
        </div>
    )
}