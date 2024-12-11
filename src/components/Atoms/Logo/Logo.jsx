import React from 'react';
import './Logo.scss'
import { logoBlue } from '../../../assets/icons';

const Logo = () => {
  return (
    <div className='logo'>
            <img src={logoBlue} alt='logo'/>
          </div>
  )
}

export default Logo