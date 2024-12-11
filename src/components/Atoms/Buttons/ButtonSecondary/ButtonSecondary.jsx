import React from 'react';
import './ButtonSecondary.scss';
import { arrowForwardBlue } from '../../../../assets/icons'

const ButtonPrimary = ({btnLabel, handleClick}) => {
  return (
    <button className='btn-secondary' onClick={handleClick}>
      <span className='btn-secondary__text'>{btnLabel}</span>
      <img src={arrowForwardBlue} alt='icon add to card' className='btn-secondary__icon'/>
    </button>
  )
}

export default ButtonPrimary