import './Button.sass'

interface IButtonSession {
    value: string,
    subClassName: string
}

export default function Button(props: IButtonSession): JSX.Element {
    const { value, subClassName } = props;
    const className = `button__${subClassName}`;
    return(
        <input 
            className = {className}
            type = "submit" 
            value = {value}
        />
    )
}