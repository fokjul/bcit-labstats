
import './OfferingDetails.scss';
import { useState } from 'react';
import Modal from '../../../GeneralTemplates/Modal/Modal';
import SubmitApprovalForm from '../../../../prototypes/Forms/SubmitApprovalForm/SubmitApprovalForm';
import PopupTip from '../../../GeneralTemplates/PopupTip/PopupTip.jsx';
import PopupTipContent from '../../../../prototypes/Content /PopupTipContent/PopupTipContent.jsx';
import { ButtonIcon } from '../../../Atoms/Buttons/ButtonIcon/ButtonIcon.jsx';
import { question } from '../../../../assets/icons/index.js';

const OfferingDetails = ({offeringDetails, courseDetails, departmentalApproval}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDepartmentalPopupOpen, setIsDepartmentalPopupOpen] = useState(false)

    const handleRequestApproval = () => {
        setIsModalOpen(true)
    }

    const handleOpenDepartmentalPopup = () => {
        setIsDepartmentalPopupOpen(prev => !prev)
    }

    const handleSubmitApprovalRequest = () => {
        console.log('submit request')
    }

  return (
    <>
        <Modal 
            title={(() => {
                const crn = courseDetails.crn?.toUpperCase() || '';
                const title = courseDetails.title || '';
                const fullTitle = `Request Approval for ${crn} ${title}`;
                
                return fullTitle.split(' ').map((word, index) => {
                    // Keep CRN in uppercase (positions 3 and 4 for "FMGT 2100")
                    if (index === 3 || index === 4) {
                        return word.toUpperCase();
                    }
                    
                    const articles = ['a', 'an', 'the', 'and', 'or', 'but', 'for', 'nor', 'so', 'yet', 'at', 'by', 'in', 'of', 'on', 'to', 'up', 'as', 'is'];
                    const lowerWord = word.toLowerCase();
                    
                    if (index === 0 || !articles.includes(lowerWord)) {
                        return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
                    }
                    return lowerWord;
                }).join(' ');
            })()}
            btnLabel='Submit Request'
            handleBtnClick={handleSubmitApprovalRequest}
            isModalOpen = {isModalOpen}
            setIsModalOpen = {setIsModalOpen}>
            <SubmitApprovalForm 
                courseName={courseDetails.title}
            />
        </Modal>
        <div className='offering-details'>
            <div className='offering-details__container'>
            <div className='offering-details__item'>
                <h5 className='offering-details__item-heading'>Duration</h5>
                <p className='offering-details__item-copy'>{offeringDetails.duration}</p>
            </div>
            <div className='offering-details__item'>
                <h5 className='offering-details__item-heading'>Instructor</h5>
                <p className='offering-details__item-copy'>{offeringDetails.instructor}</p>
            </div>
            <div className='offering-details__item'>
                <h5 className='offering-details__item-heading'>
                Course outline</h5>
                <p className='offering-details__item-copy'>Course outline TBD — see Learning Outcomes in the interim.</p>
            </div>
            </div>
            { departmentalApproval && 
                <div className='offering-details__approval' id="offering-details-approval">
                <h5 className='offering-details__item-heading' id="approval-duration-heading">Departmental approval</h5>
                <div className='descr__container--prereq-approval-wrapper' id="prereq-approval-wrapper">
                    <div className='approval-copy' id="approval-copy-container">
                        <p id="approval-text" className="offering-details__item-copy">Departmental approval is required to register after completing the prerequisite.</p>
                        <ButtonIcon 
                            icon={question}
                            handleBtnClick={handleOpenDepartmentalPopup}
                            id="departmentalapproval-info-icon"
                        />
                        {isDepartmentalPopupOpen && (
                            <PopupTip
                                title='Why approval is needed?'
                                setIsPopupTipOpen={setIsDepartmentalPopupOpen}
                                >
                                    <PopupTipContent 
                                        content = 'Departmental approval is required to confirm you have completed all prerequisites. If you have not received approval yet, please submit a request below - you will not be able to register without it.'
                                    />
                            </PopupTip>
                        )}
                    </div>
                        <button className="buttonIcon buttonIcon--primary" id="request-approval-button" onClick={handleRequestApproval}>
                            <span id="request-approval-text">request approval</span>
                        </button>
                    </div>
                </div>
            }
            
            <div className='offering-details'>
            <div className='offering-details__info'>
            <h5 className='offering-details__item-heading'>
                Important Information</h5>
            <ol className='offering-details__item-copy'>
                {offeringDetails.important_info.map((item, index) => {
                return <li key={index} className='offering-details__important-item'>{item}</li>
                })}
            </ol>
            </div>
            </div>
        </div>
    </>
   
  )
}

export default OfferingDetails