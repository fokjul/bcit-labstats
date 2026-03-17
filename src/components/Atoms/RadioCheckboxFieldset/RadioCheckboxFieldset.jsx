import './RadioCheckboxFieldset.scss';

const RadioCheckboxFieldset = ({
  groupKey,
  legend,
  options,
  filters,
  onRadioChange,
  onCheckboxChange
}) => {
  return (
    <fieldset className='filterSet'>
      <legend className='filterSet__legend'>{legend}</legend>
      {options.map((item) => (
        <div key={item.id} className='filterSet__input'>
          <input
            type={item.type}
            id={item.id}
            name={item.name}
            value={item.value}
            checked={
              item.type === "radio"
                ? filters[groupKey] === item.value
                : filters[groupKey][item.value]
            }
            onChange={
              item.type === "radio"
                ? onRadioChange
                : onCheckboxChange(groupKey, item.value)
            }
          />
          <label htmlFor={item.id} className='filterSet__label'>{item.label}</label>
        </div>
      ))}
    </fieldset>
  );
};

export default RadioCheckboxFieldset;