import './FormInputText.scss';

const FormInputText = ({label, name, id, placeholder = '', required = false, type = 'text', disabled = false, courseDetails }) => {
  
   console.log(courseDetails)
  return (
     <div className="formField__container">
        <lable htmlFor={name} className={`formField__label ${required && `formField__label--required`}`}>{label}</lable>
        <input 
            type={type} 
            name={name} 
            id={id} 
            placeholder = {placeholder} 
            className="formField__input" 
            disabled={disabled}
            value = {courseDetails ? `${courseDetails.title} - ${courseDetails.crn}` : ''}
            />
     </div>
  )
}

export default FormInputText