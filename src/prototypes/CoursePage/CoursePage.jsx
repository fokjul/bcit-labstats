import "./CoursePage.scss";
import axios from "axios";
import { useState, useEffect } from "react";

//Components
import OfferingList from "../../components/CourseTemplates/Offerings/OfferingList/OfferingList";
import Breadcrumbs from "../../components/CourseTemplates/Breadcrumbs/Breadcrumbs";
import Notice from "../../components/Panels/Notice/Notice";
import PageHeader from "../../components/CourseTemplates/CoursePageHeader/CoursePageHeader";
import SideBar from "../../components/CourseTemplates/SideBar/CourseSidebar";
import Accordion from "../../components/CourseTemplates/AccordionPanel/Accordion/Accordion";
import PageLayout from "../../components/Layout/PageLayout/PageLayout";


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
        <SideBar />
        <div className="contentArea__main">
          <Notice
            heading="International Fees"
            descr="International fees are typically 3.12 times the domestic tuition. Exact cost will be calculated upon completion of registration."
            type="info"
          />
          <Accordion courseDetails={courseDetails} />
          <OfferingList courseDetails={courseDetails} />
        </div>
      </div>
    </div>
    </PageLayout>
  );
};

export default CoursePage;
