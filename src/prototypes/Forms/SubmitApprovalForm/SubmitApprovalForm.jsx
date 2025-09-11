import FormInputText from '../../../components/Atoms/FormInputText/FormInputText'
import './SubmitApprovalForm.scss'

const SubmitApprovalForm = ({ courseName }) => {
  return (
    <div className='form__container'>
      <p className='form__description'>
          After completing the prerequisites, you&apos;ll need departmental approval in order to register for {courseName}. Please submit your request below — we&apos;ll review your student record and follow up by email.</p>
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
      </form>
    </div>
  )
}

export default SubmitApprovalForm