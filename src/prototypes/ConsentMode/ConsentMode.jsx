import './ConsentMode.scss'

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//Components
import Breadcrumbs from "../../components/CourseTemplates/Breadcrumbs/Breadcrumbs";
import PageLayout from "../../components/Layout/PageLayout/PageLayout";

import GeneralPageHeader from "../../components/GeneralTemplates/GeneralPageHeader/GeneralPageHeader";
import SidebarMenu from "../../components/Navigation/Sidebar/SidebarMenu/SidebarMenu";
GeneralPageHeader
import iceChatbotSideBarMenuData from '../../data/iceChatbot/IceChatbotSideBarMenu.json';
import ButtonIconLarge from '../../components/Atoms/Buttons/ButtonIconLarge/ButtonIconLarge';
import Modal from '../../components/GeneralTemplates/Modal/Modal';
import { useCookieModal } from '../../contexts/CookieModalContext.jsx';



const ConsentMode = () => {
  const { isCookiePolicyOpen, setIsCookiePolicyOpen, isCookieSettingsOpen, setIsCookieSettingsOpen } = useCookieModal();
 
  useEffect(() => {
    setIsCookiePolicyOpen(true);
  }, []);
 
  const closeCookiePolicy = () => {
    setIsCookiePolicyOpen(false)
  }
 
  const customizeCookieSettings = () => {
    setIsCookiePolicyOpen(false);
    setIsCookieSettingsOpen(true);
  }

  return (
    <PageLayout>
      <div className="app">
      <Breadcrumbs 
        crn = ''
        subject = 'test'
      />
      <GeneralPageHeader
        title='General Application'

      />
      <div className="contentArea">
        <SidebarMenu 
          content={iceChatbotSideBarMenuData}
        />
        <div className="contentArea__main">
          <div className='contentArea__main__text'>
            <div className='contentArea__main__text-block'>
              <p>If you are seeking employment, professional licensing or further study in Canada, let ICES help you achieve your goals. ICES evaluates formal for-credit educational programs of study for people who have studied in other countries and then determines comparable levels in British Columbian and Canadian terms. The results of an ICES assessment are provided in evaluation reports that are objective, consistent, and reliable.</p>
              <p>If you are seeking an evaluation for immigration purposes, you will need a different type of report called the Educational Credential Assessment.</p>
            </div>
            <div className='contentArea__main__text-block'>
              <h2 className='heading2'>ICES does not evaluate:</h2>
              <ul>
                  <li>Trade qualifications</li>
                  <li>Military training</li>
                  <li>Second language training</li>
                  <li>Professional licenses or titles such as a Chartered Accountant</li>
                  <li>Exam based qualifications</li>
                  <li>Apprenticeships</li>
                  <li>Work or life experience</li>
                  <li>Continuing education courses taken at non-recognized institutions</li>
                  <li>Non-credit professional development courses</li>
              </ul>
              <p>For general applicants, follow this step-by-step process:</p>
            </div>
            <div className='contentArea__main__text-block'>
              <h2 className='heading2'>Step 1: Select evaluation type (Basic or Comprehensive)</h2>
              <p>There are two types of evaluations available to general applicants: Basic and Comprehensive. The first step to submitting a general application is selecting the correct type of evaluation you require.</p> 
              <ButtonIconLarge 
              label='select evaluation type'
              type='secondary'
              isButtonDisabled={false}
              handleBtnClick={() => {}}
              />
            </div>
            <div className='contentArea__main__text-block'>
              <h2 className='heading2'>Step 2: Meet the requirements</h2>
              <p>Make sure you understand the service fees required to apply and receive your evaluation.
              </p> 
              <ButtonIconLarge 
              label='understand the service fee'
              type='secondary'
              isButtonDisabled={false}
              handleBtnClick={() => {}}
              />
            </div>
            </div>
        </div>
      </div>
    </div>
    <Modal 
            title='BCIT Cookie Policy'
            setIsModalOpen={setIsCookiePolicyOpen}
            isModalOpen={isCookiePolicyOpen}
            btnLabel='Accept all'
            handlePrimaryBtnClick={closeCookiePolicy}
            secondaryBtn={true}
            secondaryBtnLabel='Customize'
            handleSecondaryBtnClick={customizeCookieSettings}
            tetriaryBtn={false}
        >
            <div className='cookie-settings'>
                <p>We use cookies to understand how the site is used to improve your user experience.</p>
            </div>
    </Modal>
    </PageLayout>
  );
}

export default ConsentMode