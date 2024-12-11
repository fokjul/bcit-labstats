import './ButtonCounter.scss';
import arrowForward from '../../../../assets/icons/arrow-forward.svg'

const ButtonCounter = ({handleBtnClick, label, counter}) => {
  return (
    <button className='btn-counter' onClick={handleBtnClick}>
      <div className='btn-counter__container'>
        <span className='btn-counter__text'>{label}</span>
        <div className='btn-counter__counter'>
            {counter}
        </div>
      </div>
      <img src={arrowForward} alt='icon add to card' className='btn-counter__img'/>
    </button>
  )
}

export default ButtonCounter