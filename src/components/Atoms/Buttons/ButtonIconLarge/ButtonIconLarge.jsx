import './ButtonIconLarge.scss';


const ButtonIconLarge  = ({handleBtnClick, label, designType, arrowType = 'right', type = 'button', param ='', isButtonDisabled}) => {
  return (
    <button 
      className = {`buttonIcon buttonIcon--${designType} arrow-${arrowType}`} 
      disabled = {isButtonDisabled}
      onClick = {handleBtnClick}
      type = {type}
    >
        <span>{label}</span>
    </button>
  )
}

export default ButtonIconLarge 