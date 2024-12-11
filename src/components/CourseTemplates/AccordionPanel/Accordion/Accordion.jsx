import './Accordion.scss';
import AccordionRow from '../AccordionRow/AccordionRow';

const Accordion = ({courseDetails=''}) => {
  return (
    <div className='accordion'>
      <AccordionRow 
        title='Course Overview'
        courseDetails={courseDetails}
      />
      <AccordionRow 
        title='Learning Outcomes'
        courseDetails={courseDetails}
      />
      <AccordionRow 
        title='Related Programs'
        courseDetails={courseDetails}
      />
    </div>
  )
}

export default Accordion