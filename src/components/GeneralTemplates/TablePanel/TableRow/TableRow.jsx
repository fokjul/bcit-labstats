import './TableRow.scss'
import { check, stop, clock, arrowForwardBlue } from '../../../../assets/icons';
import StatusTag from '../../../Atoms/StatusTag/StatusTag';
import { useState } from 'react';

const TableRow = ({data, index}) => {
console.log(data)
  
  // Calculate number of available computers based on status
  const availableCount = data.computers.filter(computer => computer.status === 'available').length;
  const isLabAvailable = availableCount > 0;

  const [openRow, setOpenRow] = useState(false);

  const handleBtnClick = () => {
    setOpenRow(prev => !prev);
  }
  
  return (
    <tr className="table-row">
        <td className="table-row-cell-simple">
          {data.labName}</td>
        <td className="table-row-cell-complex">
            <button type='button' onClick={handleBtnClick}>
              <StatusTag
                name={isLabAvailable ? `${availableCount} computers available` : "Not Available"}
                value={isLabAvailable ? "available" : "unAvailable"}
                label={true}
              />
                <img src={arrowForwardBlue} alt="arrow icon" className={openRow ? 'rotated' : ''}/>
            </button>
            {openRow && data.computers.map((computer, idx) => (
              <tr key={idx} className="table-row-cell-complex-expanded">
              <td>{computer.id}</td>
              <td>{computer.os}</td>
              <td>
                <StatusTag 
                  name={computer.status}
                  value={computer.status}
                />
              </td>
            </tr>
            ))}
        </td>
    </tr>
    
  )
}

export default TableRow