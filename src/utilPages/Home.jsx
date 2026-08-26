import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ul>
        <li><Link to='/prototypes/lab-availability'>Lab Availability Page Prototype</Link></li>
        <li><Link to='/prototypes/ice-chatbot'>ICE Chatbot Prototype</Link></li>
        <li><Link to='/prototypes/donation'>Donation Page Prototype</Link></li>
        <li><Link to='/prototypes/student-loans'>Student Loans Prototype</Link></li>
        <li><Link to='/prototypes/consent-mode'>Consent Mode Prototype</Link></li>
        <li><Link to='/prototypes/policies'>Policies Prototype</Link></li>
      </ul>
    </div>
  )
}

export default Home