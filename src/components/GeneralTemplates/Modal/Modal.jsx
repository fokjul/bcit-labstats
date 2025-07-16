import './Modal.scss';
import { ButtonIcon } from '../../Atoms/Buttons/ButtonIcon/ButtonIcon';

import { xmark } from '../../../assets/icons';
import { useEffect } from 'react';
import FormButton from '../../Atoms/Buttons/FormButtonPrimary/FormButton';

const Modal = ({title, children, btnLabel, handleBtnClick, setIsModalOpen, isModalOpen}) => {

 const handleCloseModal = () => {
    setIsModalOpen(false)
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
                        <ButtonIcon 
                        icon={xmark}
                        handleBtnClick={handleCloseModal}
                        />
                    </div>
                    
                </div>
                <div className='modal__content'>
                    {children}
                </div>
                
                <div className='modal__btn'>
                    <FormButton 
                        handleBtnClick={handleBtnClick}
                        isButtonDisabled = {false}
                    />
                </div>
            </div>
        

    </div> )
  
}

export default Modal