import './FormButton.scss'

const FormButton = ({value, type, isButtonDisabled = false, handleBtnClick = '', className='formBtnPrimary'}) => {
  return (
    <input 
      className = {className}
      disabled = {isButtonDisabled}
      onClick = {() => handleBtnClick()}
      type = {type}
      value = {value}
    />
        
  )
}

export default FormButton