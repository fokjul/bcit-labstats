import "./LabAvailabilityPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Accordion from "../../components/GeneralTemplates/AccordionPanel/Accordion/Accordion";

//Components
import Breadcrumbs from "../../components/CourseTemplates/Breadcrumbs/Breadcrumbs";
import PageLayout from "../../components/Layout/PageLayout/PageLayout";

import GeneralPageHeader from "../../components/GeneralTemplates/GeneralPageHeader/GeneralPageHeader";
import SidebarMenu from "../../components/Navigation/Sidebar/SidebarMenu/SidebarMenu";
GeneralPageHeader
import labsData from '../../data/labstats/labsData.json';
import sideBarMenuData from '../../data/labstats/sideBarMenuData.json';
import StatusTag from "../../components/Atoms/StatusTag/StatusTag";


const LabAvailabilityPage = () => {
  const [labData, setLabData] = useState({});


  const getLabData = async () => {
    try {
      if (!labsData) {
        console.log('Data is not available');
        return;
      }
      setLabData(labsData.campuses);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  useEffect(() => {
    getLabData();
    console.log(labData)
  }, []);
 
  return (
    <PageLayout>
      <div className="app">
      <Breadcrumbs 
        crn = 'test'
        subject = 'test'
      />
      <GeneralPageHeader
        title='Burnaby Campus Labs'

      />
      <div className="contentArea">
        <SidebarMenu 
          content={sideBarMenuData}
        />
        <div className="contentArea__main">
          <div className="contentArea__main__container">
          <div className="contentArea__main__hours">
            <div className="contentArea__main__hours__standard">
                  <p><strong>Standard lab hours</strong></p>
                  <p>Weekdays: 7.30 AM – 10.30 PM</p>
                  <p>Weekends & holidays: 7.30 AM – 5.30 PM</p>
            </div>
            <div className="contentArea__main__hours__late-night">
              <p><strong>Late night lab hours </strong></p>
              <p>Open daily until 1:00 a.m.</p>
            </div>
          </div>
          <div className="contentArea__main__legend">
                <p><strong>Computer Status</strong></p>
                <div>
                  <StatusTag
                    name="Available"
                    value="available"
                    label={true}
                  />
                  <StatusTag
                    name="Not Available"
                    value="unAvailable"
                    label={true}
                  />
                  <StatusTag
                    name="In Use"
                    value="inUse"
                    label={true}
                  />  
                </div>
          </div>
          </div>
          
          <Accordion 
            content={labsData.campuses}
          />
        </div>
      </div>
    </div>
    </PageLayout>
  );
};

export default LabAvailabilityPage;