import './Modal.scss';
import ButtonIcon from '../../Atoms/Buttons/ButtonIcon/ButtonIcon';

import { xmark } from '../../../assets/icons';
import { useEffect, useState } from 'react';
import FormButton from '../../Atoms/Buttons/FormButton/FormButton';
import Notice from '../../Panels/Notice/Notice';

const Modal = ({title, children, setIsModalOpen, isModalOpen, btnLabel = 'submit', handlePrimaryBtnClick, secondaryBtn = false, secondaryBtnLabel, handleSecondaryBtnClick, tetriaryBtn = true, handleTetriaryBtnClick}) => {

const [isFormSubmitted, setIsFormSubmitted] = useState(false)

const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsFormSubmitted(false)
 }

const handleFormSubmission = () => {
    setIsFormSubmitted(true)
}

 useEffect(() => {
  
    isModalOpen 
    ? document.body.classList.add('no-scroll') 
    : document.body.classList.remove('no-scroll')
  
    //Cleans up side effects that touch global elements (document, window, body)
    return () => {document.body.classList.remove('no-scroll');}

}, [isModalOpen]);

  return (
   isModalOpen &&  
    <div className={`modal__bg`}>
        <div className='modal__container'>
                <div className='modal__title'>
                    <h2>{title}</h2>
                    <div className='modal__btnIcon'>
                         {tetriaryBtn && (
                            <ButtonIcon 
                            icon={xmark}
                            handleBtnClick={handleCloseModal}
                            />
                        )}
                    </div>
                </div>
                {isFormSubmitted 
                    ? <>
                        <Notice 
                            type='confirmation'
                            descr='Thank you for submitting your request. We will be in touch with you within 2 business days.'
                        />
                        <div className='modal__btn'>
                                <FormButton 
                                    value = 'close'
                                    type = 'button'
                                    handleBtnClick={handleCloseModal}
                                    isButtonDisabled = {false}
                                /> 
                        </div>
                        
                        </>
                    : <>
                        <div className='modal__content'>
                            {children}
                        </div>
                        <div className='modal__btn'>
                            <FormButton 
                                value = {btnLabel}
                                type = 'submit'
                                handleBtnClick={handlePrimaryBtnClick}
                                isButtonDisabled = {false}
                            />
                            {secondaryBtn && (
                                <FormButton 
                                    value = {secondaryBtnLabel}
                                    type = 'button'
                                    handleBtnClick={handleSecondaryBtnClick}
                                    isButtonDisabled = {false}
                                    className='formBtnSecondary'
                                />
                            )}
                    </div>
                    </>}
            </div>
        

    </div> )
  
}

export default Modal