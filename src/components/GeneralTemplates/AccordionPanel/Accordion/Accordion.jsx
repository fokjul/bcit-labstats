import './Accordion.scss';
import AccordionRow from '../AccordionRow/AccordionRow';
import { useState } from 'react';

const Accordion = ({content, setIsRowClicked, isRowClicked, handleExpandAll}) => {


  return (
    <div className='accordion'>
      <div className='accordion__header'>
        <h5>Buildings</h5>
        <button type='button' onClick={handleExpandAll} className='accordion__toggle'>{isRowClicked ? 'Collapse all rows' : 'Expand all rows'} </button>
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