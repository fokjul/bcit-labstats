import React from 'react';
import './StatusTag.scss';
import { check, stop, clock} from '../../../assets/icons'

const StatusTag = ({name, value, label = false}) => {
  return (
    <div className={`statusTag statusTag--${value}`}>
      <div>
      <img src={value === 'available' ? check : value === 'inUse' ? clock : stop} alt='icon'/>
      <p className={label ? `statusTag-text statusTag-text--${value}` : 'hidden'}>{name}</p>
      </div>
    
  </div>
  )
}

export default StatusTag