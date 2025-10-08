import './Accordion.scss';
import AccordionRow from '../AccordionRow/AccordionRow';

const Accordion = ({content}) => {

  return (
    <div className='accordion'>
      {content.campuses.map((campus) => 
        campus.buildings.map((building, buildingIndex) => (
          <AccordionRow 
              content={building}
              key={buildingIndex}
          />
        ))
        
      )}
    </div>
  )
}

export default Accordion