import './Accordion.scss';
import AccordionRow from '../AccordionRow/AccordionRow';
import { useState } from 'react';

const Accordion = ({content}) => {

  const [isExpandedAll, setIsExpandedAll] = useState(false)

  const handleExpandAll = () => {
    setIsExpandedAll(prev => !prev)
  }
  

  return (
    <div className='accordion'>
      <div className='accordion__header'>
        <h5>Buildings</h5>
        <button type='button' onClick={handleExpandAll} className='accordion__toggle'>{isExpandedAll ? 'Collapse all' : 'Expand all'} </button>
      </div>
      

      {content.map((campus) => 
        campus.buildings.map((building, buildingIndex) => (
          <AccordionRow 
              content={building}
              key={buildingIndex}
              isExpandedAll={isExpandedAll}
              setIsExpandedAll={setIsExpandedAll}
          />
        ))
        
      )}
    </div>
  )
}

export default Accordion