import './Policies.scss'
import { useMemo, useState } from "react";

// Components
import Breadcrumbs from "../../components/CourseTemplates/Breadcrumbs/Breadcrumbs";
import PageLayout from "../../components/Layout/PageLayout/PageLayout";
import GeneralPageHeader from "../../components/GeneralTemplates/GeneralPageHeader/GeneralPageHeader";
import SidebarMenu from "../../components/Navigation/Sidebar/SidebarMenu/SidebarMenu";
import SearchBarLarge from '../../components/Atoms/SearchBarLarge/SearchBarLarge';
import ButtonIconLarge from '../../components/Atoms/Buttons/ButtonIconLarge/ButtonIconLarge';
import ButtonIconLink from '../../components/Atoms/Buttons/ButtonIconLink/ButtonIconLink';
import RadioCheckboxFieldset from '../../components/Atoms/RadioCheckboxFieldset/RadioCheckboxFieldset';
import TableWithSorting from '../../components/GeneralTemplates/TablePanel/TableWithSorting/TableWithSorting';
import FilterSearchPanel from '../../components/Panels/FilterSearchPanel/FilterSearchPanel';

// Data
import policyData from '../../data/PolicyData/policyData.json';
import policySideBarMenuData from '../../data/PolicyData/policySideBarMenuData.json';

const Policies = () => {
  const initialFilters = {
    loanEligibility: "eligible",
    studyFormat: {
      partTime: false,
      fullTime: false
    },
    studyAreas: {
      business: false,
      healthScience: false,
      appliedScience: false,
      engineering: false,
      technology: false,
      trades: false
    },
    educationLevel: {
      graduate: false,
      undergraduate: false,
      trades: false
    }
  };

  const [filters, setFilters] = useState(initialFilters);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProgramName, setSelectedProgramName] = useState("");
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programNames = useMemo(
    () => Object.keys(filerSearchData.data || {}),
    []
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setSelectedProgramName("");
    setSelectedProgram(null);

    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = programNames
      .filter((program) =>
        program.toLowerCase().includes(value.toLowerCase())
      )
      .slice(0, 8);

    setSearchResults(filtered);
  };

  const handleSelectProgram = (program) => {
    setSearchQuery(program);
    setSelectedProgramName(program);
    setSelectedProgram(filerSearchData.data[program]);
    setSearchResults([]);
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (group, key) => (e) => {
    setFilters((prev) => ({
      ...prev,
      [group]: {
        ...prev[group],
        [key]: e.target.checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filters);
  };

  const handleReset = () => {
    setFilters(initialFilters);
    //setSearchQuery("");
    //setSearchResults([]);
    //setSelectedProgramName("");
    //setSelectedProgram(null);
  };

  {Object.entries(filterOptionsData).map(([groupKey, group]) => (
  <fieldset key={groupKey}>
    <legend>{group.legend}</legend>

    {group.options.map((option) => (
      <label key={option.id}>
        <input
          type={option.type}
          id={option.id}
          name={option.name}
          value={option.value}

          checked={
            option.type === "radio"
              ? filters.loanEligibility === option.value
              : filters[groupKey][option.value]
          }

          onChange={
            option.type === "radio"
              ? handleRadioChange
              : handleCheckboxChange(groupKey, option.value)
          }
        />

        {option.label}
      </label>
    ))}
  </fieldset>
))}

  return (
    <PageLayout>
      <div className="app">
        <Breadcrumbs crn="" subject="test" />
        <GeneralPageHeader title="Policies" />
        <div className="contentArea">
          <SidebarMenu content={sideBarMenuData} />
          <div className="contentArea__main">
            <FilterSearchPanel />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Policies