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


const LabAvailabilityPage = () => {
  const [courseDetails, setCourseDetails] = useState({});
  const pageTitle = "Computer Lab Availability";
  
  const sidemenuContent = {
    sectionTitle: "IT Services",
    items: [
      {
        title: "Get IT Help",
        link: "/get-help",
        children: [
          {
            title: "Contact IT Services",
            link: "/contact",
          }
        ]
      },
      {
        title: "Services",
        link: "/services",
        children: []
      },
      {
        title: "IT Resources for Students",
        link: "/students",
        children: [
          {
            title: "Computer Labs Availability",
            link: "/students/labs-availability",
            children: [
              {
                title: "Burnaby Campus Labs",
                link: "/students/labs-availability/lab-1"
              },
              {
                title: "Downtown Campus (DTC)",
                link: "/students/labs-availability/lab-1"
              },
              {
                title: "Aerospace & Technology Campus (ATC) Labs",
                link: "/students/labs-availability/lab-1"
              },
              {
                title: "Marine Campus (BMC) Labs",
                link: "/students/labs-availability/lab-1"
              },
              {
                title: "Annacis Island Campus",
                link: "/students/labs-availability/lab-1"
              },
            ]
          },
          {
            title: "Student Technology Requirements",
            link: "/students/tech-requirements"
          }
        ]
      },
      {
        title: "Student & Employee Technology Discounts",
        link: "/discounts",
        children: []
      },
      {
        title: "IT Resources for Faculty & Staff",
        link: "/faculty-staff",
        children: []
      },
      {
        title: "About IT Services",
        link: "/about",
        children: [
          {
            title: "Announcements",
            link: "/about/announcements"
          },
          {
            title: "Department Contacts",
            link: "/about/contacts"
          },
          {
            title: "IT Policies",
            link: "/about/policies"
          }
        ]
      },
      {
        title: "Information Security Standards – Users",
        link: "/security/standards/users",
        children: []
      },
      {
        title: "Information Security Standards – Management and Technical",
        link: "/security/standards/management",
        children: []
      }
    ]
  };

  const labs = {
    campuses: [
      { 
        title: "Burnaby Campus", 
        link: "/students/labs-availability/lab-1", 
        buildings: [
          {
            buildingName: "NE1",
            labs: [
              { labName: "201", availability: "Available", type: "General Access", computersTotal: 25, computersAvailable: 25 },
              { labName: "245", availability: "Available", type: "Restricted", computersTotal: 25, computersAvailable: 20 },
            ]
          },
          {
            buildingName: "NE23",
            labs: [
              { labName: "201", availability: "Available", type: "General Access", computersTotal: 25, computersAvailable: 20 },
            ]
          }
        ]
      },
      { 
        title: "Downtown Campus",
        link: "/students/labs-availability/lab-2",
        buildings: [
          {
            buildingName: "DT1",
            labs: [
              { labName: "101", availability: "Available", type: "General Access", computersTotal: 20, computersAvailable: 15 },
            ]
          }
        ]
      }
    ]
  };

  const getCourseDetails = async () => {
    try {
      const response = await axios.get("https://bcit-flcc-ph2-server.vercel.app/courses");
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
      <GeneralPageHeader
        title={pageTitle}

      />
      <div className="contentArea">
        <SidebarMenu 
          content={sidemenuContent}
        />
        <div className="contentArea__main">
          <div>
          <p>Standard lab hours
          Weekdays: 7.30 AM – 10.30 PM
          Weekends & holidays: 7.30 AM – 5.30 PM</p>
          <p>Late night lab hours
          Open daily until 1:00 a.m.</p>
          </div>
          <Accordion 
            content={labs}
          />
        </div>
      </div>
    </div>
    </PageLayout>
  );
};

export default LabAvailabilityPage;