import React from 'react';
import './StatusTag.scss';
import { check, stop, clock} from '../../../assets/icons'

const StatusTag = ({status}) => {
  return (
    
    // <div className={`statusTag statusTag--${status.value}`}>
    //   <p className={`statusTag-text statusTag-text--${status.value}`}>{status.name}</p>
    // </div>
    <div className={`statusTag statusTag--${status.value}`}>
      <div>
      <img src={status.value === 'available' ? check : status.value === 'inProgress' ? clock : stop} alt='icon'/>
      <p className={`statusTag-text statusTag-text--${status.value}`}>{status.name}</p>
      </div>
    
  </div>
  )
}

export default StatusTag