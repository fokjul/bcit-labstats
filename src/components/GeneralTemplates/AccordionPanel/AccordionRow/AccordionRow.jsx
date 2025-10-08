import './AccordionRow.scss';
import { arrowDownBlue} from '../../../../assets/icons';
import { useState } from 'react';
import Table from '../../TablePanel/Table/Table';
import { useEffect } from 'react';

const AccordionRow = ({content}) => {
    const [isRowClicked, setIsRowClicked] = useState(false)

    useEffect (() => {
        content.buildingName === "Course Overview" && setIsRowClicked(true) 
    }, [])

    const handleRowClick = () => {
        setIsRowClicked(prev => !prev)
    }

  return (
    <div className='accordionRow'>
        <button className={`accordionRow__button ${isRowClicked ? 'accordionRow__button--open' : ''}`} type='button' onClick={handleRowClick}>
            <div>
                <h2>{content.buildingName}</h2>
                <p>Stations available</p>
            </div>
            <img src={arrowDownBlue} alt='arrow icon' className={`accordionRow__button-icon ${isRowClicked ? 'accordionRow__button-icon--rotated' : ''}`}/>
        </button>
        <div className={ isRowClicked ? 'accordionRow__content' : 'hidden'}>
            <Table 
                data={content.labs}
            />
        </div>
        
    </div>

  )
}

export default AccordionRow