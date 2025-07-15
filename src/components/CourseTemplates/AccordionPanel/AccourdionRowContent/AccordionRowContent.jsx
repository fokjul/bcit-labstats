import './AccordionRowContent.scss';
import Notice from "../../../Panels/Notice/Notice.jsx";
import TextLink from '../../../Navigation/TextLink/TextLink.jsx';
import ButtonIconLarge from '../../../Atoms/Buttons/ButtonIconLarge/ButtonIconLarge.jsx';
import Modal from '../../../GeneralTemplates/Modal/Modal.jsx';
import SubmitApprovalForm from '../../../../prototypes/Forms/SubmitApprovalForm/SubmitApprovalForm.jsx';
import { useState } from 'react';

const AccordionRowContent = ({title, courseDetails}) => {
    const courseInfo = courseDetails.overview;

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleRequestApproval = () => {
        setIsModalOpen(true)
    }

    const handleSubmitApprovalRequest = () => {
        console.log('submit request')
    }
    
  return (
    <>
    <Modal 
        title='Request Departmental Approval'
        btnLabel='Submit Request'
        handleBtnClick={handleSubmitApprovalRequest}
        isModalOpen = {isModalOpen}
        setIsModalOpen = {setIsModalOpen}>
        {<SubmitApprovalForm />}
    </Modal>
     <div>
        {courseInfo && title === "Course Overview" 
            && <div className='descr'>
                <p className='descr__text'>{courseInfo.descr}</p>
                <div className='descr__container'>
                    <div className='descr__container--prereq'>
                        <h4 className='descr__title'>Prerequisite(s)</h4>
                        <ul>
                            { courseInfo.prereq.map((item, index) => {
                                return <li key={index}>{item}</li>
                                }) 
                            }
                            <li className='descr__container--prereq-approval'>
                                <div>
                                    <span >
                                    Departmental approval required to register after completing prerequisites above. <TextLink text='Why approval is needed?'/>
                                    </span>
                                    <ButtonIconLarge 
                                        label="request approval"
                                        isButtonDisabled={false}
                                        handleBtnClick={handleRequestApproval}
                                        type= "primary"
                                    />
                                </div>
                                

                            </li>
                        </ul>
                    </div>
                    <div className='descr__container--credits'>
                        <h4 className='descr__title'>Credit(s)</h4>
                        <p>{courseInfo.credits}
                        </p>
                    </div>
                </div>               
                <div className='descr__container--fee'>
                    <h4 className='descr__title'>Domestic fees</h4>
                    <span>{`$${courseInfo.domestic_fees.min} - $${courseInfo.domestic_fees.max}`}</span>
                    <small>See individual course offerings below for actual costs.</small>
                </div>
                <Notice
                    heading="International Fees"
                    descr="International fees are typically 3.12 times the domestic tuition. Exact cost will be calculated upon completion of registration."
                    type="info"
                />
            </div> 
            
            }
        {courseInfo && title === 'Learning Outcomes'
            && <div className='descr'>
                    <p className='descr__text'>Upon successful completion of this course, the student will be able to:</p>
                    <ul className='descr__text'>
                        {courseDetails.outcomes.map((item, index) => {
                        return <li key={index}>{item}</li>
                        })}
                    </ul>
                    <small>Effective as of Fall 2023</small>
                </div>}
        {courseInfo && title === 'Related Programs'
            && <div className='descr'>
                    <span>{`${courseDetails.title} ${courseDetails.crn} is offered as a part of the following programs:`}</span>
                    <ul>
                        {courseDetails.related_programs.map((item, index) => {
                        return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>}
    </div>
    </>
   
  )
}

export default AccordionRowContent