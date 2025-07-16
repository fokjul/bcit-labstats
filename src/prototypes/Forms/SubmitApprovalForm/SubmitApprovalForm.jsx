import FormInputText from '../../../components/Atoms/FormInputText/FormInputText'
import './SubmitApprovalForm.scss'

const SubmitApprovalForm = () => {
  return (
    <div className='form__container'>
      <p className='form__description'>
          After completing the prerequisites, you’ll need departmental approval in order to register for the course. Please submit your request below — we’ll review your student record and follow up by email.</p>
      <form>
        <FormInputText 
          name = 'studentId'
          id = 'studentId'
          label = 'Student ID'
          placeholder= 'E.g., A01234567'
          required = {true}
        />
        <FormInputText 
          name = 'studentEmail'
          id = 'studentEmail'
          label = 'Email'
          placeholder= 'E.g., example@gmail.com'
          type='email'
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