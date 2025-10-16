import './ButtonIcon.scss'

const ButtonIcon = ({icon ='', handleBtnClick, id, className = ''}) => {
    return (
        <div className={`btn-icon ${className}`} onClick={handleBtnClick} id={id}>
            {icon && <img src={icon} alt='copy link' className='btn-icon__img'/>}
        </div>
      )
}

export default ButtonIcon 
