import './Modal.scss';
import ButtonPrimary from '../../Atoms/Buttons/ButtonPrimary/ButtonPrimary';
import { ButtonIcon } from '../../Atoms/Buttons/ButtonIcon/ButtonIcon';

import { xmark } from '../../../assets/icons';

const Modal = ({title, closeModal}) => {
  return (
    <div className='modal__bg'>
        <div className='modal__container'>
                <div className='modal__title'>
                    <h2>Continue to Registration?</h2>
                    <ButtonIcon 
                        icon={xmark}
                        handleBtnClick={closeModal}
                    />
                </div>
                <div className='modal__content'>
                    <p>Continuing will result in <strong>immediate registration</strong> of all course offerings listed on this page, subject to possible course restrictions.</p>
                    <p><strong>Prompt payment is required</strong> upon checkout or your registration will be dropped and you will lose your seat.</p>
                    <p>Are you sure you want to continue?</p>
                </div>
                
                <div className='modal__btn'>
                    <ButtonPrimary 
                        label="ok, continue to registration"
                    />
                </div>
                
                

            </div>
        

    </div>
  )
}

export default Modal