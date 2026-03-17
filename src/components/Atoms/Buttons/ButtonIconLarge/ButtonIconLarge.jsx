import './ButtonIconLarge.scss';


const ButtonIconLarge  = ({handleBtnClick, label, designType, type = 'button', param ='', isButtonDisabled}) => {
  return (
    <button 
      className = {`buttonIcon buttonIcon--${designType}`} 
      disabled = {isButtonDisabled}
      onClick = {handleBtnClick}
      type = {type}
    >
        <span>{label}</span>
    </button>
  )
}

export default ButtonIconLarge 