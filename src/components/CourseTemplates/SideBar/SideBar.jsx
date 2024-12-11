import React from 'react'
import './Sidebar.scss'

const SideBar = () => {
  return (
    <div className='sidebar'>
          <div className='sidebar-textblock'>
            <h4>Notices</h4>
            <div>
              <h5>Registration news</h5>
              <span>Registration is now open for the Winter 2025 term.</span>
            </div>
            <div>
              <h5>Additional Information</h5>
              <ul>
                <li>Please check the classroom locations listing on the first day of your course.</li>
                <li>Find out if you qualify for financial aid.</li>
                <li>BCIT’s English Language Proficiency Standard for Flexible Learning (Part-time Studies) is English 12.</li>
                <li>Find out about payment options at BCIT.</li>
              </ul>
            </div>
          </div>
          <div className='sidebar-textblock'>
            <h4>Recently visited courses</h4>
          </div>
          
          
        </div>
  )
}

export default SideBar