import ButtonIconLarge  from '../../../Atoms/Buttons/ButtonIconLarge/ButtonIconLarge'
import './OfferingFooterCardPage.scss'

const OfferingFooterCardPage = ({handleBtnClick, courseDetailsCrn}) => {
  return (
    <div className='OfferingFooterCardPage'> 
      
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