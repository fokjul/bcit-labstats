import './OfferingFooterCoursePage.scss';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

//Components
import TextLink from '../../../Navigation/TextLink/TextLink';
import ButtonPrimary from '../../../Atoms/Buttons/ButtonIconLarge/ButtonIconLarge';
import ButtonCounter from '../../../Atoms/Buttons/ButtonCounter/ButtonCounter';
import StatusTag from '../../../Atoms/StatusTag/StatusTag';
import ButtonLink from '../../../Atoms/Buttons/ButtonLink/ButtonLink';

//components
import ButtonIconLarge from '../../../Atoms/Buttons/ButtonIconLarge/ButtonIconLarge';

const OfferingFooterCoursePage = ({offeringDetails, cartCounter, setCartCounter, setOfferingsAddedToCart, offeringsAddedToCart, courseDetails, isViewDetailsClicked, setIsViewDetailsClicked}) => {
  
  const [isAddedToCart, setIsAddedToCart] = useState({
    status: false,
    offerings: {}
  })
  
  const handleAddToCard = () => {
    setIsAddedToCart(() => ({
      status: true,
      offerings: offeringDetails
    }))
    setCartCounter(prevCounter =>  prevCounter + 1)
    setOfferingsAddedToCart((prev) => [...prev, offeringDetails])
  }
  
  //Passes # of courses added to the cart to the CartPage
  const navigate = useNavigate();
  
  const handleViewCart = () => {
    //To pass selected offerings to the Cart page
    navigate('/prototypes/cart', {
      state: {
        offeringsAddedToCart: offeringsAddedToCart,
        courseDetails: courseDetails, 
      }
    })
  }

  const handleViewDetailsClick = () => {
    setIsViewDetailsClicked({id: offeringDetails.crn, isClicked: true})
  }
  
  const handleHideDetailsClick = () => {
    setIsViewDetailsClicked({id: offeringDetails.crn, isClicked: false})
  }

  return (
    <div className='offeringFooter'>
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
                    : <ButtonIconLarge 
                        label="add to cart"
                        handleBtnClick={() => handleAddToCard(offeringDetails)}
                        type="primary"
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
          <div className='offeringFooter__hide-btn-container'>
          <ButtonLink 
            label="Hide details"
            handleClick={handleHideDetailsClick}
          />
        </div>
        )
      }
    </div>
  )
}

export default OfferingFooterCoursePage