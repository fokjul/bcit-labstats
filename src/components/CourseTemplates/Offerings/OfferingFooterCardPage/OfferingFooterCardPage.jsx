import ButtonIconLarge  from '../../../Atoms/Buttons/ButtonIconLarge/ButtonIconLarge'
import './OfferingFooterCardPage.scss'

const OfferingFooterCardPage = ({handleBtnClick, courseDetailsCrn, isCheckboxChecked, handleCheckboxCheck}) => {
  return (
    <div className='OfferingFooterCardPage'> 
      <div className='OfferingFooterCardPage__container'>
        <h5 className='offering-details__item-heading'>
          Read confirmation
        </h5>
        <div className='OfferingFooterCardPage__checkbox'>
          <input 
            type='checkbox' 
            id='readConfirmation' 
            name='readConfirmation' 
            value="confirmation"
            checked={isCheckboxChecked}
            onChange={handleCheckboxCheck}
            />
          <label htmlFor="readConfirmation">I confirm I have read and understand the important information above.</label>
        </div>
      </div>
      <div className='OfferingFooterCardPage__btn-container'>
        <ButtonIconLarge 
          label="remove"
          handleBtnClick={handleBtnClick}
          type='tetriary'
          param = {courseDetailsCrn}
        />
      </div>
    </div>
  )
}

export default OfferingFooterCardPage