import './ButtonIcon.scss'

export const ButtonIcon = ({icon, handleBtnClick}) => {
    return (
        <div className='btn-icon' onClick={handleBtnClick}>
            <img src={icon} alt='copy link' className='btn-icon__img'/>
        </div>
      )
}
