import './Modal.scss';
import ButtonPrimary from '../../Atoms/Buttons/ButtonIconLarge/ButtonIconLarge';
import { ButtonIcon } from '../../Atoms/Buttons/ButtonIcon/ButtonIcon';

import { xmark } from '../../../assets/icons';

const Modal = ({title, children, btnLabel, handleBtnClick, setIsModalOpen, isModalOpen}) => {

 const handleCloseModal = () => {
    setIsModalOpen(false)
 }

  return (
    <div className={`modal__bg ${isModalOpen ? 'modal_block' :'modal__hidden'}`}>
        <div className='modal__container'>
                <div className='modal__title'>
                    <h2>{title}</h2>
                    <ButtonIcon 
                        icon={xmark}
                        handleBtnClick={handleCloseModal}
                    />
                </div>
                <div className='modal__content'>
                    {children}
                </div>
                
                <div className='modal__btn'>
                    <ButtonPrimary 
                        label={btnLabel}
                        handleBtnClick={handleBtnClick}
                    />
                </div>
                
                

            </div>
        

    </div>
  )
}

export default Modal