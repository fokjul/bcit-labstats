import './FilterSearchPanel.scss'
import { useMemo, useState } from "react";

// Components
import Breadcrumbs from "../../CourseTemplates/Breadcrumbs/Breadcrumbs";
import PageLayout from "../../Layout/PageLayout/PageLayout";
import GeneralPageHeader from "../../GeneralTemplates/GeneralPageHeader/GeneralPageHeader";
import SidebarMenu from "../../Navigation/Sidebar/SidebarMenu/SidebarMenu";
import SearchBarLarge from '../../Atoms/SearchBarLarge/SearchBarLarge';
import ButtonIconLarge from '../../Atoms/Buttons/ButtonIconLarge/ButtonIconLarge';
import ButtonIconLink from '../../Atoms/Buttons/ButtonIconLink/ButtonIconLink';
import RadioCheckboxFieldset from '../../Atoms/RadioCheckboxFieldset/RadioCheckboxFieldset';
import TableWithSorting from '../../GeneralTemplates/TablePanel/TableWithSorting/TableWithSorting';

// Data


const FilterSearchPanel = ({filterData, tableData}) => {
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
     <div className="contentArea__main__container">
              <div className='contentArea__main__search'>
                {/* <h3>Search by program name</h3> */}

                <div className="student-loans__search-wrap">
                  <SearchBarLarge
                    placeholder="Search by policy name, number or keyword"
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
              <TableWithSorting 
                data={filerSearchData}
              />
            </div>
  );
};

export default FilterSearchPanel