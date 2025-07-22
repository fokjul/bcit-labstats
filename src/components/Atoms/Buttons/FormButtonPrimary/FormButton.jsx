import './FormButton.scss'

const FormButton = ({value, type, isButtonDisabled = false, handleBtnClick = ''}) => {
  return (
    <input 
      className = 'submitFormButton' 
      disabled = {isButtonDisabled}
      onClick = {() => handleBtnClick()}
      type = {type}
      value = {value}
    />
        
  )
}

export default FormButton