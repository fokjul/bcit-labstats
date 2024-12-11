import './ButtonPrimary.scss';
import { arrowForward } from '../../../../assets/icons';

const ButtonPrimary = ({handleBtnClick, label}) => {
  return (
    <button className='btn-primary' onClick={handleBtnClick}>
      <span className='btn-primary__text'>{label}</span>
      <img src={arrowForward} alt='icon add to card' className='btn-primary__img'/>
    </button>
  )
}

export default ButtonPrimary