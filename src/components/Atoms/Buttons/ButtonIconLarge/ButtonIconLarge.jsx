import './ButtonIconLarge.scss';


const ButtonIconLarge  = ({handleBtnClick, label, type, param}) => {
  return (
    <button className={`buttonIcon buttonIcon--${type}`} onClick={() => handleBtnClick(param)}>
      <span>{label}</span>
    </button>
  )
}

export default ButtonIconLarge 