import './CoursePageHeader.scss';

import { email, print, arrowForwardBlue } from '../../../assets/icons';
import ButtonIconLarge  from '../../Atoms/Buttons/ButtonIconLarge/ButtonIconLarge';

const PageHeader = ({crn, title, scope, subject}) => {
  return (
    <div className='pageHeader'>
        <div className='pageHeader__container'>
            <div className='pageHeader__container-text'>
                <span className='pageHeader__descr'>{crn}</span>
                <h1 className='pageHeader__title'>{title}</h1>
                <div className='pageHeader__descr'>
                    <span className='pageHeader__descr-element'>{subject}</span>
                    <span className='pageHeader__descr-element'>{scope}</span>
                </div>
                <div className='pageHeader__icon'>
                    <img src={print} alt='print icon' className='pageHeader__icon-element'/>
                    <img src={email} alt='email icon' className='pageHeader__icon-element'/>
                </div>
            </div>
        
            <div className='pageHeader__container-btn'>
                <div className='pageHeader__btn'>
                    <ButtonIconLarge  
                        label='subscribe'
                        handleBtnClick=''
                        icon={arrowForwardBlue}
                        type='secondary'
                    />
                </div>
                <div className='pageHeader__btn'>
                    <ButtonIconLarge 
                        label='contact us'
                        handleBtnClick=''
                        icon={arrowForwardBlue}
                        type='secondary'
                    />
                </div>  
            </div> 
        </div>
    </div>
  )
}

export default PageHeader