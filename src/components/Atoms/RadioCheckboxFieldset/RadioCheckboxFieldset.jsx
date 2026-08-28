import './RadioCheckboxFieldset.scss';

const RadioCheckboxFieldset = ({
  groupKey,
  legend,
  options,
  filters,
  onRadioChange,
  onCheckboxChange,
  onDropdownChange
}) => {
  const firstOption = options[0];
  
  // If there are more than 3 options, render as dropdown
  if (options.length > 3) {
    return (
      <div className='filterSet filterSet--dropdown'>
        <label className='filterSet__legend'>{legend}</label>
        <select
          className='filterSet__dropdown'
          name={firstOption.name}
          value={filters[groupKey] || ''}
          onChange={(e) => onDropdownChange && onDropdownChange(groupKey, e.target.value)}
        >
          <option value="">All</option>
          {options.map((item) => (
            <option key={item.id} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // Otherwise render as radio buttons
  return (
    <fieldset className='filterSet'>
      <legend className='filterSet__legend'>{legend}</legend>
      {options.map((item) => (
        <div>
          <div key={item.id} className='filterSet__input'>
            <input
              type="radio"
              id={item.id}
              name={item.name}
              value={item.value}
              checked={filters[groupKey] === item.value}
              onChange={onRadioChange}
              disabled={item.disabled}
            />
            <label htmlFor={item.id} className='filterSet__label'>{item.label}</label>
          </div>
           <div className='filterSet__description'>{item.description}</div>
        </div>
       
      ))}
    </fieldset>
  );
};

export default RadioCheckboxFieldset;