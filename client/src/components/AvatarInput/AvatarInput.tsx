import { useState } from 'react'
import './avatar-input.sass'

interface IAvatarInputProps {
    title: string
    name: string    
    onAvaChange(value: string): void
}

export default function AvatarInput(props: IAvatarInputProps): JSX.Element {
    const [filename, setFilename] = useState<string>('Choose file')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {files} = e.target
        if(files) {
            const {length} = files
            if (length > 0) {
                const {name} = files[0]
                const formatedName = name.length > 20 ? name.slice(name.length - 20) : name
                setFilename(formatedName)
                const src =URL.createObjectURL(files[0]);
                props.onAvaChange(src)
            } else {
                setFilename(filename)
            }
        } else {
            setFilename(filename)
        }       
        
    }


    return (
        <div className="ai">
            <p className="ai__title">{props.title}</p>
            <div className="ai__wrapper">
                
                <p className="ai__filename">{filename}</p>

                <label htmlFor={props.name} className="ai__label">                   
                    <input
                        id={props.name}
                        className="ai__input"
                        type="file"
                        name={props.name}
                        onChange={handleChange}
                    />
                    <span className="ai__btn">Button</span>
                </label>

            </div>            
        </div>
    )
}