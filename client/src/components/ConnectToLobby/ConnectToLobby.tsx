import { useState } from 'react'
import Switcher from '../Switcher/Switcher'
import './connect-to-lobby.sass'

export default function ConnectToLobby(): JSX.Element {
    const [switchValue, setSwitchValue] = useState<boolean>(false)

    const handleSwitchChange = (flag: boolean): void => {
        setSwitchValue(flag)
    }

    return (
        <div className="ctl">
            <div className="ctl__form-wrapper">
                <p className="ctl__title">Connect to lobby</p>
                <Switcher 
                    title='Connect as Observer' 
                    defaultValue={switchValue} 
                    onChangeToogle={handleSwitchChange}
                />
            </div>
        </div>
    )
}