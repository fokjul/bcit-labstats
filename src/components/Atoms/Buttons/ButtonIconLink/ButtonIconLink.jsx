import './ButtonIconLink.scss'

const ButtonIconLink = ({handleClick, label, icon, type}) => {
  return (
    <button className='btn-iconLink' onClick={handleClick} type={type}>
        {icon ? <img src={icon} alt={label} className='btn-iconLink__img'/> : ''}
        <span className='btn-iconLink__text'>{label}</span>
    </button>
  )
}

export default ButtonIconLink