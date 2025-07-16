import "./CoursePage.scss";
import axios from "axios";
import { useState, useEffect } from "react";

//Components
import OfferingList from "../../components/CourseTemplates/Offerings/OfferingList/OfferingList";
import Breadcrumbs from "../../components/CourseTemplates/Breadcrumbs/Breadcrumbs";
import PageHeader from "../../components/CourseTemplates/CoursePageHeader/CoursePageHeader";
import Accordion from "../../components/CourseTemplates/AccordionPanel/Accordion/Accordion";
import PageLayout from "../../components/Layout/PageLayout/PageLayout";
import SidebarNotices from "../../components/Navigation/Sidebar/SidebarNotices/SidebarNotices";
import TextLinkSmall from "../../components/Navigation/TextLinkSmall/TextLinkSmall";
import { Link } from 'react-router-dom';


const CoursePage = () => {
  const [courseDetails, setCourseDetails] = useState({});

  const getCourseDetails = async () => {
    try {
      const response = await axios.get("https://bcit-design-server.vercel.app/courses");
      if (!response.data.course) {
        console.log("Data is not available");
      }
      setCourseDetails(response.data.course);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  useEffect(() => {
    getCourseDetails();
  }, []);
 
  return (
    <PageLayout>
      <div className="app">
      <Breadcrumbs 
        crn = {courseDetails.crn}
        subject = {courseDetails.subject}
      />
      <PageHeader
        crn={courseDetails.crn}
        title={courseDetails.title}
        scope={courseDetails.scope}
        subject={courseDetails.subject}
      />
      <div className="contentArea">
        <SidebarNotices />
        <div className="contentArea__main">
          <Accordion courseDetails={courseDetails} />
          <OfferingList courseDetails={courseDetails} />
          <div className="contentArea__cancelNotice">
            Programs and courses are subject to change without notice. For more information visit
            <TextLinkSmall 
              text='BCIT Course Cancellations' 
              source='https://www.bcit.ca/flexible-learning/part-time-courses-programs/part-time-course-requirements-registration/course-cancellations-transfers-withdrawals/#cancelled-courses'/> 
          </div>
        </div>
      </div>
    </div>
    </PageLayout>
  );
};

export default CoursePage;
