
import './OfferingDetailsNoApproval.scss';
import { useState } from 'react';
import Modal from '../../../GeneralTemplates/Modal/Modal.jsx';
import SubmitApprovalForm from '../../../../prototypes/Forms/SubmitApprovalForm/SubmitApprovalForm.jsx';
import PopupTip from '../../../GeneralTemplates/PopupTip/PopupTip.jsx';
import PopupTipContent from '../../../../prototypes/Content /PopupTipContent/PopupTipContent.jsx';
import { ButtonIcon } from '../../../Atoms/Buttons/ButtonIcon/ButtonIcon.jsx';
import { question } from '../../../../assets/icons/index.js';

const OfferingDetails = ({offeringDetails, courseDetails}) => {
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