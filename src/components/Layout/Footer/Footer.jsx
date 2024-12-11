import React from 'react'
import './Footer.scss'
import { facebook, linkedin, twitter} from '../../../assets/icons';

const Footer = () => {
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
                    <span>Feedback</span>
                    <span>Copyright</span>
                    <span>Privacy</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer