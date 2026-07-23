import './Footer.scss'
import { facebook, linkedin, twitter} from '../../../assets/icons';
import ButtonLink from '../../../components/Atoms/Buttons/ButtonLink/ButtonLink'
import Modal from '../../GeneralTemplates/Modal/Modal'
import { useCookieModal } from '../../../contexts/CookieModalContext';
import RadioCheckboxFieldset from '../../Atoms/RadioCheckboxFieldset/RadioCheckboxFieldset';
import { useState } from 'react';

const Footer = () => {
  const { isCookieSettingsOpen, setIsCookieSettingsOpen } = useCookieModal();
  const [cookieFilters, setCookieFilters] = useState({
    cookieConsent: {
      necessary: true,
      analytics: true,
      marketing: true
    }
  });

  const handleCookieSettings = () => {
    setIsCookieSettingsOpen(true);
  }

  const handleCheckboxChange = (groupKey, value) => {
    setCookieFilters(prev => ({
      ...prev,
      [groupKey]: {
        ...prev[groupKey],
        [value]: !prev[groupKey][value]
      }
    }));
  }

  const handlePrimaryBtnClick = () => {
    setIsCookieSettingsOpen(false);
  }

  return (
    <div className='footer'>
        <div className='footer__container'>
            <div className='footer__contact'>
                <div className='footer__contact-link'>
                    <span className='footer__contact-header'>Contact</span>
                    <div className='footer__contact-address'>
                        <span>3700 Willingdon Ave.</span>
                        <span>Burnaby, British Columbia</span>
                        <span>Canada V5G 3H2</span>
                        <span>bcit.ca</span>
                    </div>
                </div>
                <div className='footer__contact-phones'>
                    <span>Telephone: 604-434-5734</span>
                    <span>Toll-free (Can/US): 1-866-434-1610</span>
                    <span>More contact numbers</span>
                </div>
                <div className='footer__contact-img'>
                    <img src={facebook} alt='facebook'/>
                    <img src={twitter} alt='twitter'/>
                    <img src={linkedin} alt='linkedin'/>
                </div>
            </div>
            <div className='footer__link-container'>
                <span>Visit</span>
                <span>Apply Now</span>
                <span>Give</span>
            </div>
            <div className='footer__link-container'>
                <span>News</span>
                <span>Events</span>
                <span>Careers</span>
            </div>
            <div className='footer__info-container'>
                <span className='footer__contact-header'>Campus Information</span>
                <div className='footer__info-container-campuses'>
                    <span>Burnaby Campus</span>
                    <span>Downtown Campus</span>
                    <span>Aerospace Technology Campus</span>
                    <span>Annacis Island Campus</span>
                </div>
                
                <div className='footer__info-container-links'>
                    <ButtonLink
                        label = "Cookie Settings"
                        className="button-link"
                        handleClick={handleCookieSettings}
                    />
                    <span>Copyright</span>
                    <span>Privacy</span>
                </div>
            </div>
        </div>
        <Modal 
            title='Cookie Settings'
            setIsModalOpen={setIsCookieSettingsOpen}
            isModalOpen={isCookieSettingsOpen}
            btnLabel='Save Preferences'
            handlePrimaryBtnClick={handlePrimaryBtnClick}
        >
            <div className='cookie-settings'>
            <p>This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember your browser. We use this information to improve and customize your browsing experience, for analytics and metrics about our visitors both on this website and other media, and for marketing purposes.</p>
            <RadioCheckboxFieldset
                groupKey="cookieConsent"
                legend="Manage cookies"
                options={[
                    { id: "cookie-consent-1", name: "cookieConsent", value: "necessary", label: "Strictly necessary", type: "checkbox", disabled: true, description: "Keeps the site secure and working — page navigation, forms, and saving these very choices. Cannot be switched off." },
                    { id: "cookie-consent-2", name: "cookieConsent", value: "analytics", label: "Analytics & performance", type: "checkbox", description: "Helps us see which pages are useful and where students get stuck, so we can fix and improve them." },
                    { id: "cookie-consent-3", name: "cookieConsent", value: "marketing", label: "Advertising & marketing", type: "checkbox", description: "Lets us show and measure BCIT program ads that are relevant to you on other sites." }
                ]}
                filters={cookieFilters}
                onRadioChange={() => {}}
                onCheckboxChange={handleCheckboxChange}
            />
               
            </div>
        </Modal>
    </div>
  )
}

export default Footer