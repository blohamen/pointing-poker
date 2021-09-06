import './button.sass'

interface IButtonProps {
    value: string
    size: 'large' | 'medium' | 'small'
    theme: 'dark' | 'light'
    form?: string
}

export default function Button(props: IButtonProps): JSX.Element {
    const clasName = `button button__${props.size} button__${props.theme}`
    const handleClick = () => {console.log('test');
    } 
    return(
        <input 
            className={clasName}
            type="submit" 
            value={props.value}
            onClick={handleClick}
            form={props.form || ''}
        />
    )
}