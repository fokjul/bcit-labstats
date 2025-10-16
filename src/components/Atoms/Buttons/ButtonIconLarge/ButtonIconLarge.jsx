import './ButtonIconLarge.scss';


const ButtonIconLarge  = ({handleBtnClick, label, type, param ='', isButtonDisabled}) => {
  return (
    <button 
      className = {`buttonIcon buttonIcon--${type}`} 
      disabled = {isButtonDisabled}
      onClick = {() => handleBtnClick()}
    >
        <span>{label}</span>
    </button>
  )
}

export default ButtonIconLarge 