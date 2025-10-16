import './ButtonIconRounded.scss'

const ButtonIconRounded = ({handleBtnClick, label='', type, isButtonDisabled}) => {
  return (
    <button 
      className = {`buttonIconRounded buttonIconRounded--${type}`} 
      disabled = {isButtonDisabled}
      onClick = {handleBtnClick}
    >
        <span>{label}</span>
    </button>
  )
}

export default ButtonIconRounded