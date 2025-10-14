import './Accordion.scss';
import AccordionRow from '../AccordionRow/AccordionRow';
import { useState } from 'react';

const Accordion = ({content}) => {

  const [isRowClicked, setIsRowClicked] = useState(false)

  // const handleExpandAll = () => {
  //   setIsRowClicked(prev => !prev)
  // }

  // Track open state per building (flat list)
  const allBuildings = content.flatMap(campus => campus.buildings);
  const [openRows, setOpenRows] = useState(Array(allBuildings.length).fill(false));

  // Expand / Collapse all
  const handleExpandAll = () => {
    const shouldExpand = openRows.some(isOpen => !isOpen); // if any closed, expand all
    setOpenRows(Array(allBuildings.length).fill(shouldExpand));
  };

  // Toggle a single row
  const handleToggleRow = (index) => {
    setOpenRows((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const isAllExpanded = openRows.every(Boolean);

  return (
    <div className='accordion'>
      <div className='accordion__header'>
        <h5>Buildings</h5>
        <button type='button' onClick={handleExpandAll} className='accordion__toggle'>{isAllExpanded ? 'Collapse all' : 'Expand all'} </button>
      </div>
      

      {content.map((campus) => 
        campus.buildings.map((building, buildingIndex) => (
          <AccordionRow 
              content={building}
              key={buildingIndex}
              isRowClicked={isRowClicked}
              setIsRowClicked={setIsRowClicked}
          />
        ))
        
      )}
    </div>
  )
}

export default Accordion