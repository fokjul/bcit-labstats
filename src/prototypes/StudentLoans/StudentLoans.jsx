import './StudentLoans.scss';
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

// Data
import studentLoanData from '../../data/studentLoans/studentLoanData.json';
import sideBarMenuData from '../../data/studentLoans/sideBarMenuData.json';
import filterOptionsData from '../../data/studentLoans/filterOptionsData.json';

const StudentLoans = () => {
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
    () => Object.keys(studentLoanData.data || {}),
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
    setSelectedProgram(studentLoanData.data[program]);
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
        <GeneralPageHeader title="Student Loan Eligibility" />
        <div className="contentArea">
          <SidebarMenu content={sideBarMenuData} />
          <div className="contentArea__main">
            <div className="contentArea__main__container">
              <div className='contentArea__main__search'>
                <h3>Search by program name</h3>

                <div className="student-loans__search-wrap">
                  <SearchBarLarge
                    placeholder="Search by program name..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />

                  {searchResults.length > 0 && (
                    <ul className="student-loans__autocomplete">
                      {searchResults.map((program) => (
                        <li
                          key={program}
                          className="student-loans__autocomplete-item"
                          onClick={() => handleSelectProgram(program)}
                        >
                          {program}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className='contentArea__main__filter'>
                <h3>or Explore programs</h3>
                <form onSubmit={handleSubmit} className='contentArea__main__filter-form'>
                <div className='contentArea__main__filter-form__group'>
                  {Object.entries(filterOptionsData).map(([groupKey, group]) => (
                    <RadioCheckboxFieldset
                        key={groupKey}
                        groupKey={groupKey}
                        legend={group.legend}
                        options={group.options}
                        filters={filters}
                        onRadioChange={handleRadioChange}
                        onCheckboxChange={handleCheckboxChange}
                    />
                ))}
                </div>
                <div className='contentArea__main__filter-form__actions'>
                    <ButtonIconLarge
                    icon="filter"
                    label="Filter programs"
                    designType="primary"
                    type="submit"
                  />

                  <ButtonIconLink
                    icon=""
                    label="Reset Filter"
                    type="reset"
                    handleClick={handleReset}
                  />
                </div>
                </form>
              </div>
              <div className='contentArea__main__result'>
                 {selectedProgram && (
                  <div className="student-loans__result">
                    <h3>{selectedProgramName}</h3>
                    {selectedProgram.map((item) => (
                      <>
                        <p>{item.status}</p>
                        <p>{item.start_date}</p>
                      </>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default StudentLoans;