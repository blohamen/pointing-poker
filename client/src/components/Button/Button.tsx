import './button.sass'



interface IButtonProps {
    value: string
    size: 'large' | 'medium' | 'small'
    theme: 'dark' | 'light'
    
}



export default function Button(props: IButtonProps): JSX.Element {
    const clasName = `button button__${props.size} button__${props.theme}`
  
    return(
        <input 
            className={clasName}
            type="submit" 
            value={props.value}
            
        />
    )
}