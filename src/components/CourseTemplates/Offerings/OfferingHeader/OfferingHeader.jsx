import './OfferingHeader.scss';

import ButtonIconLink from '../../../Atoms/Buttons/ButtonIconLink/ButtonIconLink';
import StatusTag from '../../../Atoms/StatusTag/StatusTag';

//assets
import link from '../../../../assets/icons/link.svg';

const OfferingHeader = ({offeringDetails}) => {
  return (
    <div className='offering__header'>
          <div className='offering__header-container'>
            <div className='offering__header__wrapper'>
              <div className='offering__header__heading'>
                  <h4 className='offering__header__heading-container'>{offeringDetails.dates}</h4>
              </div>
            <div className='offering__header__crn'>
              <div className='offering__header__caption'>
                <span className='offering__header__caption-label'>CRN</span>
                <span className='offering__header__caption-value'>{offeringDetails.crn}</span>
              </div>
              <ButtonIconLink 
                label="copy link"
                handleClick={()=> (console.log('btn clicked'))}
                icon={link}
              />
            </div>
            </div>
            <div className='offering__header__status-tag'>
              <StatusTag 
                status={offeringDetails.status}
              />
            </div>
            
          </div>
          <div className='offering__header__cost'>
              <h4>{`$${offeringDetails.domestic_fee}`}</h4>
              <span className='offering__header__caption'>Domestic fees</span>
          </div>
      </div>
  )
}

export default OfferingHeader