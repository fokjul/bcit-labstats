import './ConfirmationCheckbox.scss';

const ConfirmationCheckbox = ({isCheckboxChecked, handleCheckboxCheck}) => {
  return (
    <div>
        <div className='confirmationSection'>
            <div>
              <h5 className='offering-details__item-heading'>
            Confirmation:
              </h5>
              <p className='confirmationSection__description'>To proceed with registration and add this course to cart, please confirm:</p>
            </div>
            
            <div className='confirmationSection__checkbox'>
            <input 
                type='checkbox' 
                id='readConfirmation' 
                name='departmentalApproval' 
                value="confirmation"
                checked={isCheckboxChecked.departmentalApproval}
                onChange={handleCheckboxCheck}
                />
            <label htmlFor="readConfirmation">I have received departmental approval.</label>
            </div>
            <div className='confirmationSection__checkbox'>
            <input 
                type='checkbox' 
                id='readConfirmation' 
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