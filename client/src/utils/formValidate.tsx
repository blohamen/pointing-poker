export default function validate(value: string): JSX.Element | string {
  if (value === '') {
<<<<<<< HEAD
    return <span className="form-item-error">* the field must not be empty</span>
=======
    return (
      <span className="form-item-error">* the field must not be empty</span>
    )
>>>>>>> main-page
  }
  return ''
}
