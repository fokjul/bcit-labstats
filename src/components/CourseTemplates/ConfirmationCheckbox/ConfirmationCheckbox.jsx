import './ConfirmationCheckbox.scss';
import { ButtonIcon } from '../../Atoms/Buttons/ButtonIcon/ButtonIcon';
import { question } from '../../../assets/icons';
import PopupTip from '../../GeneralTemplates/PopupTip/PopupTip';
import PopupTipContent from '../../../prototypes/Content /PopupTipContent/PopupTipContent';

const ConfirmationCheckbox = ({isCheckboxChecked, handleCheckboxCheck, isPopupTipOpen,setIsPopupTipOpen}) => {
  return (
    <div>
        <div className='confirmationSection'>
            <div>
              <h5 className='offering-details__item-heading'>
            Confirmation:
              </h5>
              <p className='confirmationSection__description'>To proceed with registration and add this course to cart, please confirm:</p>
            </div>
            
            <div className='confirmationSection__checkbox approval-copy'>
            <input 
                type='checkbox' 
                id='departmentalApproval' 
                name='departmentalApproval' 
                value="confirmation"
                checked={isCheckboxChecked.departmentalApproval}
                onChange={handleCheckboxCheck}
                />
            <label htmlFor="readConfirmation">I have received departmental approval.</label>
            <ButtonIcon 
              icon={question}
              handleBtnClick={() => setIsPopupTipOpen(prev => !prev)}
            />
            {isPopupTipOpen && (
                <PopupTip
                    title='Why approval is needed?'
                    isPopupTipOpen={isPopupTipOpen}
                    setIsPopupTipOpen={setIsPopupTipOpen}
                    >
                        <PopupTipContent 
                          content = 'Departmental approval is required to confirm you’ve completed all prerequisites. If you haven’t received approval yet, please submit a request above — you won’t be able to register without it.'
                        />
                </PopupTip>
            )}
            </div>
            <div className='confirmationSection__checkbox'>
            <input 
                type='checkbox' 
                id='confirmImportantInfo' 
                name='confirmImportantInfo' 
                value="confirmation"
                checked={isCheckboxChecked.confirmImportantInfo}
                onChange={handleCheckboxCheck}
                />
            <label htmlFor="readConfirmation">I have read and understand the important information above.</label>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationCheckbox