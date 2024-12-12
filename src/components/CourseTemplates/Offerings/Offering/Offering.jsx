import { useState } from 'react';
import './Offering.scss';
import { useNavigate } from "react-router-dom";

//Components
import MeetingMatrixTable from '../../MeetingMatrixTable/MeetingMatrixTable'
import ButtonIconLink from '../../../Atoms/Buttons/ButtonIconLink/ButtonIconLink';
import StatusTag from '../../../Atoms/StatusTag/StatusTag';
import TextLink from '../../../Navigation/TextLink/TextLink';
import ButtonPrimary from '../../../Atoms/Buttons/ButtonPrimary/ButtonPrimary';
import ButtonCounter from '../../../Atoms/Buttons/ButtonCounter/ButtonCounter';
import ButtonLink from '../../../Atoms/Buttons/ButtonLink/ButtonLink';

//assets
import link from '../../../../assets/icons/link.svg';

const Offering = ({offeringDetails, cartCounter, setCartCounter, setCoursesAddedToCart, coursesAddedToCart}) => {

const [isViewDetailsClicked, setIsViewDetailsClicked] = useState({
  id: '',
  isClicked: false
})


const [isAddedToCart, setIsAddedToCart] = useState({
  status: false,
  offerings: {}
})

const handleAddToCard = (offeringDetails) => {
  setIsAddedToCart(() => ({
    status: true,
    offerings: offeringDetails
  }))
  setCartCounter(prevCounter =>  prevCounter + 1)
  setCoursesAddedToCart((prev) => [...prev, offeringDetails])
}

//Passes # of courses added to the cart to the CartPage
const navigate = useNavigate();

const handleViewCart = () => {
  //To pass data about selected offering to the Cart page
  navigate('/prototypes/cart', {state: coursesAddedToCart})
}

const handleViewDetailsClick = () => {
  setIsViewDetailsClicked({id: offeringDetails.crn, isClicked: true})
}

const handleHideDetailsClick = () => {
  setIsViewDetailsClicked({id: offeringDetails.crn, isClicked: false})
}

  return (
    <div className='crn-section'>
      <div className='crn-section__header'>
          <div className='crn-section__header-container'>
            <div className='crn-section__crn-container'>
              <div className='crn-section__crn'>
                  <h4 className='crn-section__crn-header'>{offeringDetails.dates}</h4>
              </div>
            <div className='crn-section__crn'>
              <div className='crn-section__caption'>
              <span className='crn-section__caption-label'>CRN</span>
              <span className='crn-section__caption-value'>{offeringDetails.crn}</span>
              </div>
              <ButtonIconLink 
                label="copy link"
                handleClick={()=> (console.log('btn clicked'))}
                icon={link}
              />
            </div>
            </div>
            <div className='crn-section__status-tag'>
              <StatusTag 
                status={offeringDetails.status}
              />
            </div>
            
          </div>
          <div className='crn-section__cost'>
              <h4 className='crn-section__crn-header'>{`$${offeringDetails.domestic_fee}`}</h4>
              <span className='crn-section__caption'>Domestic fees</span>
          </div>
      </div>
      <div className='crn-section__schedule'>
       <MeetingMatrixTable 
        meetingMetrics={offeringDetails.meeting_metrics}
       />
      </div>
      {isViewDetailsClicked.isClicked && isViewDetailsClicked.id === offeringDetails.crn && 
        <>
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
        </>
      }
      
        
      <div className={isViewDetailsClicked.isClicked && isViewDetailsClicked.id === offeringDetails.crn && offeringDetails.status === 'Available' ? 'crn-section__status--available' : 'crn-section__status' }>
        {
          isViewDetailsClicked.isClicked && isViewDetailsClicked.id === offeringDetails.crn 
          ? (offeringDetails.status.value === 'available' 
              ? <div className='offering-details__available'>
                  <div className='offering-details__subscribe'>
                    <StatusTag status={offeringDetails.status}/> 
                    {'This course is available'}
                  </div>

                  { isAddedToCart.status 
                    ? <ButtonCounter 
                          label="view cart"
                          counter={cartCounter}
                          handleBtnClick={handleViewCart}
                      />
                    : <ButtonPrimary 
                        label="add to cart"
                        handleBtnClick={() => handleAddToCard(offeringDetails)}
                      />

                  }
                  
                </div> 
              : <div className='offering-details__subscribe'>
                  <div>
                    <StatusTag status={offeringDetails.status}/> {`This course is ${offeringDetails.status.name.toLowerCase()}. Please check this page for other currently available offerings, `} <TextLink text='subscribe' /> {` to receive email updates or `}  <TextLink text='contact us' /> {`with your comments or questions.`}
                  </div>
                </div>)
          : <ButtonLink 
            label="View details"
            handleClick={handleViewDetailsClick}
            /> 
        }
      </div>
      {isViewDetailsClicked.isClicked && isViewDetailsClicked.id === offeringDetails.crn && (
        <div className='offering-details' >
        <div className='offering-details__hide-btn-container'>
          <ButtonLink 
            label="Hide details"
            handleClick={handleHideDetailsClick}
          />
        </div>
      </div>
      )
      
      }
      
     
    </div>
  )
}

export default Offering