import './ButtonIconLink.scss'

const ButtonIconLink = ({handleClick, label, icon}) => {
  return (
    <div className='btn-iconLink' onClick={handleClick}>
        <img src={icon} alt={label} className='btn-iconLink__img'/>
        <span className='btn-iconLink__text'>{label}</span>
    </div>
  )
}

export default ButtonIconLink