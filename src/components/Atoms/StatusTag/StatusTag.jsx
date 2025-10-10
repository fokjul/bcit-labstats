import React from 'react';
import './StatusTag.scss';
import { check, stop, clock} from '../../../assets/icons'

const StatusTag = ({status, label = false}) => {
  return (
    <div className={`statusTag statusTag--${status.value}`}>
      <div>
      <img src={status.value === 'available' ? check : stop} alt='icon'/>
      <p className={label ? `statusTag-text statusTag-text--${status.value}` : 'hidden'}>{status.name}</p>
      </div>
    
  </div>
  )
}

export default StatusTag