import FormInputText from '../../../components/Atoms/FormInputText/FormInputText'
import './SubmitApprovalForm.scss'

const SubmitApprovalForm = () => {
  return (
    <div className='form__container'>
      <p className='form__description'>
          Some form description can be here
      </p>
      <form>
        <FormInputText 
          name = 'studentId'
          id = 'studentId'
          label = 'Student ID'
          placeholder= 'E.g., A01234567'
          required = {true}
        />
        <FormInputText 
          name = 'courseName'
          id = 'courseName'
          label = 'Course Name'
          placeholder= 'E.g., Organizational Behaviour'
          required = {true}
        />
          <FormInputText 
          name = 'courseCrn'
          id = 'courseCrn'
          label = 'Course CRN'
          placeholder= 'E.g., 123456'
          required = {true}
        />
      </form>
    </div>
  )
}

export default SubmitApprovalForm