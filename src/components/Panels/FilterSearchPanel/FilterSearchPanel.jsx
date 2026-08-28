import './FilterSearchPanel.scss'
import { useMemo, useState } from "react";

// Components
import SearchBarLarge from '../../Atoms/SearchBarLarge/SearchBarLarge';
import ButtonIconLarge from '../../Atoms/Buttons/ButtonIconLarge/ButtonIconLarge';
import ButtonIconLink from '../../Atoms/Buttons/ButtonIconLink/ButtonIconLink';
import RadioCheckboxFieldset from '../../Atoms/RadioCheckboxFieldset/RadioCheckboxFieldset';
import Dropdown from '../../Atoms/Dropdown/Dropdown';
import TableWithSorting from '../../GeneralTemplates/TablePanel/TableWithSorting/TableWithSorting';

const FilterSearchPanel = ({ filterData, tableData, searchPlaceholder = "Search...", searchTitle = "Search", buttonLabel = "Filter" }) => {
  // Dynamically build initial filters from filterData
  const buildInitialFilters = () => {
    if (!filterData) return {};
    
    const initialFilters = {};
    Object.entries(filterData).forEach(([groupKey, group]) => {
      // If there are more than 3 options, treat as dropdown (single selection)
      // If 3 or fewer options, treat as radio buttons (single selection)
      // Both start with null to show all items initially
      initialFilters[groupKey] = null;
    });
    return initialFilters;
  };

  const [filters, setFilters] = useState(buildInitialFilters);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const itemNames = useMemo(
    () => tableData ? tableData.map(item => item.title || item.name || item.id) : [],
    [tableData]
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = itemNames
      .filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      )
      .slice(0, 8);

    setSearchResults(filtered);
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDropdownChange = (groupKey, value) => {
    setFilters((prev) => ({
      ...prev,
      [groupKey]: value
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
    setFilters(buildInitialFilters);
    setSearchQuery("");
    setSearchResults([]);
  };

  // Filter table data based on search and filters
  const filteredTableData = useMemo(() => {
    if (!tableData) return [];
    
    return tableData.filter(item => {
      // Search filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const titleMatch = (item.title || '').toLowerCase().includes(searchLower);
        if (!titleMatch) return false;
      }

      // Apply other filters
      for (const [groupKey, filterValue] of Object.entries(filters)) {
        if (filterValue && typeof filterValue === 'object') {
          // Checkbox filters - at least one must be checked
          const checkedValues = Object.entries(filterValue)
            .filter(([_, checked]) => checked)
            .map(([value]) => value);
          
          if (checkedValues.length > 0) {
            const itemValue = item[groupKey];
            if (!checkedValues.includes(itemValue)) return false;
          }
        } else if (filterValue !== null && filterValue !== undefined && filterValue !== '') {
          // Radio filters - exact match (only if a value is selected)
          const itemValue = item[groupKey];
          if (itemValue !== filterValue) return false;
        }
      }

      return true;
    });
  }, [tableData, searchQuery, filters]);

  return (
    <div className="contentArea__main__container">
      <div className='contentArea__main__filter-bar'>
        <div className="contentArea__main__search-container">
          <h3>{searchTitle}</h3>
          <div className="student-loans__search-wrap">
            <SearchBarLarge
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={handleSearchChange}
              hideSmallSearch={true}
              showFullSearch={true}
              hideSearchIcon={true}
            />

            {searchResults.length > 0 && (
              <ul className="student-loans__autocomplete">
                {searchResults.map((name, index) => (
                  <li
                    key={index}
                    className="student-loans__autocomplete-item"
                    onClick={() => {
                      setSearchQuery(name);
                      setSearchResults([]);
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {filterData && (
          <div className="contentArea__main__filter-btn-container">
            <ButtonIconLarge
              label={buttonLabel}
              designType="accordion"
              arrowType="down"
              handleBtnClick={() => setShowFilters(!showFilters)}
              className={showFilters ? 'open' : ''}
            />
          </div>
        )}
      </div>

      {filterData && showFilters && (
        <div className='contentArea__main__filter'>
          <form onSubmit={handleSubmit} className='contentArea__main__filter-form'>
            <div className='contentArea__main__filter-form__group'>
              {Object.entries(filterData).map(([groupKey, group]) => {
                // If there are more than 3 options, use Dropdown
                if (group.options.length > 3) {
                  return (
                    <Dropdown
                      key={groupKey}
                      id={group.options[0].id}
                      name={group.options[0].name}
                      label={group.legend}
                      value={filters[groupKey]}
                      options={group.options}
                      onChange={(e) => handleDropdownChange(groupKey, e.target.value)}
                      placeholder="All"
                    />
                  );
                }
                // Otherwise use RadioCheckboxFieldset
                return (
                  <RadioCheckboxFieldset
                    key={groupKey}
                    groupKey={groupKey}
                    legend={group.legend}
                    options={group.options}
                    filters={filters}
                    onRadioChange={handleRadioChange}
                    onCheckboxChange={handleCheckboxChange}
                  />
                );
              })}
            </div>
            <div className='contentArea__main__filter-form__actions'>
              {/* <ButtonIconLarge
                icon="filter"
                label="Apply Filter"
                designType="primary"
                type="submit"
              /> */}

              <ButtonIconLink
                icon=""
                label="Reset Filter"
                type="reset"
                handleClick={handleReset}
              />
            </div>
          </form>
        </div>
      )}

      <TableWithSorting 
        data={filteredTableData}
      />
    </div>
  );
};

export default FilterSearchPanel