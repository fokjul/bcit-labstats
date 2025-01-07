import './ButtonIconLarge.scss';


const ButtonIconLarge  = ({handleBtnClick, label, type}) => {
  return (
    <button className={`buttonIcon buttonIcon--${type}`} onClick={handleBtnClick}>
      <span>{label}</span>
    </button>
  )
}

export default ButtonIconLarge 