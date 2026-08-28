import './Dropdown.scss';

const Dropdown = ({ id, name, label, value, options, onChange, placeholder = "Select an option" }) => {
  return (
    <div className='dropdown'>
      {label && <label className='dropdown__label' htmlFor={id}>{label}</label>}
      <select
        id={id}
        className='dropdown__select'
        name={name}
        value={value || ''}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.id || option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
