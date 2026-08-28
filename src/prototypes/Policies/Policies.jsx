import './Policies.scss'

// Components
import Breadcrumbs from "../../components/CourseTemplates/Breadcrumbs/Breadcrumbs";
import PageLayout from "../../components/Layout/PageLayout/PageLayout";
import GeneralPageHeader from "../../components/GeneralTemplates/GeneralPageHeader/GeneralPageHeader";
import SidebarMenu from "../../components/Navigation/Sidebar/SidebarMenu/SidebarMenu";
import FilterSearchPanel from "../../components/Panels/FilterSearchPanel/FilterSearchPanel";

// Data
import policyData from '../../data/PolicyData/policyData.json';
import policySideBarMenuData from '../../data/PolicyData/policySideBarMenuData.json';

const Policies = () => {
  return (
    <PageLayout>
      <div className="app">
        <Breadcrumbs crn="" subject="test" />
        <GeneralPageHeader title="Policies" />
        <div className="contentArea">
          <SidebarMenu content={policySideBarMenuData} />
          <div className="contentArea__main">
            <FilterSearchPanel 
              filterData={policyData.filters}
              tableData={policyData.items}
              searchTitle="Search Policies" 
              searchPlaceholder="Search by policy name, number or keyword"
              buttonLabel="Filter Policies"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Policies