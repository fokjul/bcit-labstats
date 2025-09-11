import React, { useEffect } from 'react';
import './AccordionRow.scss';
import { arrowDownBlue} from '../../../../assets/icons';
import { useState } from 'react';
import AccordionRowContent from '../AccourdionRowContent/AccordionRowContent';

const AccordionRow = ({title, courseDetails, isPopupTipOpen, setIsPopupTipOpen, departmentalApproval}) => {
    const [isRowClicked, setIsRowClicked] = useState(false)

    useEffect (() => {
        title === "Course Overview" && setIsRowClicked(true) 
    }, [])

    const handleRowClick = () => {
        setIsRowClicked(prev => !prev)
    }

  return (
    <div className='accordionRow'>
        <div className='accordionRow__header' onClick={handleRowClick}>   
            <h2 className='accordionRow__header-title'>{title}</h2>
            <button 
                className='accordionRow__header-btn' type='button'>
                    <img src={arrowDownBlue} alt='arrow icon' className={`accordionRow__header-btn-icon ${isRowClicked ? 'rotated' : ''}`}/>
            </button>
            
        </div>
        <div className={ isRowClicked ? 'accordionRow__text' : 'hidden'}>
            <AccordionRowContent 
                title={title}
                courseDetails={courseDetails}
                isPopupTipOpen = {isPopupTipOpen}
                setIsPopupTipOpen = {setIsPopupTipOpen}
                departmentalApproval={departmentalApproval}
            />
        </div>
        
    </div>

  )
}

export default AccordionRow