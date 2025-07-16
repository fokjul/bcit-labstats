import './FormButton.scss'

const FormButton = ({isButtonDisabled = false, handleBtnClick = ''}) => {
  return (
    <input 
      className = 'submitFormButton' 
      disabled = {isButtonDisabled}
      onClick = {() => handleBtnClick()}
      type = 'submit'
      value = 'submit'
    />
        
  )
}

export default FormButton