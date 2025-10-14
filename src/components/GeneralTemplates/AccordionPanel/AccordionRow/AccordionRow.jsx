import './AccordionRow.scss';
import { arrowDownBlue, question} from '../../../../assets/icons';
import { useState } from 'react';
import Table from '../../TablePanel/Table/Table';
import { useEffect } from 'react';
import ButtonIcon from  '../../../Atoms/Buttons/ButtonIcon/ButtonIcon';
import PopupTip from '../../../GeneralTemplates/PopupTip/PopupTip';
import PopupTipContent from '../../../../prototypes/Content/PopupTipContent/PopupTipContent';

const AccordionRow = ({content, isRowClicked, setIsRowClicked}) => {

    const [isGeneralTipOpen, setIsGeneralTipOpen] = useState(false)
    const [isRestrictedTipOpen, setIsRestrictedTipOpen] = useState(false)

    const totalAvailableStations = content.labs.reduce((total, lab) => {
        const availableCount = lab.computers.filter(computer => computer.status === 'available').length;
        return total + availableCount;
    }, 0);

    useEffect (() => {
        content.buildingName === "Course Overview" && setIsRowClicked(true) 
    }, [])

    const handleRowClick = () => {
        setIsRowClicked(prev => !prev)
    }

    const handleToggleGeneralTip = () => {
        setIsGeneralTipOpen(prev => !prev)
    }

    const handleToggleRestrictedTip = () => {
        setIsRestrictedTipOpen(prev => !prev)
    }

  return (
    <div className='accordionRow'>
        <button className={`accordionRow__button ${isRowClicked ? 'accordionRow__button--open' : ''}`} type='button' onClick={handleRowClick}>
            <div>
                <h2>{content.buildingName}</h2>
                <p>{`${totalAvailableStations} computers available`}</p>
            </div>
            <img src={arrowDownBlue} alt='arrow icon' className={`accordionRow__button-icon ${isRowClicked ? 'accordionRow__button-icon--rotated' : ''}`}/>
        </button>
        <div className={ isRowClicked ? 'accordionRow__content' : 'hidden'}>
            <div className='accordionRow__content__container'>
                <div className='accordionRow__content__header'>
                    <h4>General access labs</h4>
                    <ButtonIcon 
                        icon={question}
                        handleBtnClick={handleToggleGeneralTip}
                    />
                    {isGeneralTipOpen && (
                        <PopupTip
                            title='General access labs?'
                            isPopupTipOpen={isGeneralTipOpen}
                            setIsPopupTipOpen={setIsGeneralTipOpen}
                        >
                            <PopupTipContent 
                                content = 'These labs are available for use by all BCIT staff and students. They are fully supported by IT Services and may be booked through the Timetabling department.

                                If no class is scheduled, they are available for use on a first-come first-serve basis.
                                If there is a scheduled class, the instructor may allow the (quiet) use of an unused computer. Use of an unused computer during a scheduled class is always at the discretion of the instructor.
                                All general access labs have an LCD data projector.'
                            />
                        </PopupTip>
                    )}
                </div>
                
                <Table 
                    data={content.labs}
                />
            </div>

            <div className='accordionRow__content__container'>
                <div className='accordionRow__content__header'>
                    <h4>Restricted access labs</h4>
                    <ButtonIcon 
                        icon={question}
                        handleBtnClick={handleToggleRestrictedTip}
                    />
                    {isRestrictedTipOpen && (
                        <PopupTip
                            title='Restricted access labs'
                            isPopupTipOpen={isRestrictedTipOpen}
                            setIsPopupTipOpen={setIsRestrictedTipOpen}
                        >
                            <PopupTipContent 
                                content = 'These labs are available for use by all BCIT staff and students. They are fully supported by IT Services and may be booked through the Timetabling department.'
                            />
                        </PopupTip>
                    )}
                </div>
                
                <Table 
                    data={content.labs}
                />
            </div>
            
        </div>
        
    </div>

  )
}

export default AccordionRow