import FormInputText from '../../../components/Atoms/FormInputText/FormInputText'
import './SubmitApprovalForm.scss'

const SubmitApprovalForm = ({ courseDetails }) => {

  return (
    <div className='form__container'>
      <p className='form__description'>
          {`You must request departmental approval after completing the course prerequisites before you can register. Submit your request below. We’ll review your record and follow up by email.`}</p>
      <form>
        <FormInputText 
          name = 'courseName'
          id = 'courseName'
          label = 'Course Name'
          placeholder= 'E.g., A01234567'
          required = {false}
          disabled = {true}
          courseDetails = {courseDetails}
        />
        <FormInputText 
          name = 'bcitId'
          id = 'bcitId'
          label = 'BCIT ID'
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