import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ul>
        <li>Introduction</li>
        <li>Components</li>
        <li><Link to='/prototypes/course'>Course Prototype</Link></li>
        <li><Link to='/prototypes/cart'>Cart Prototype</Link></li>
      </ul>
    </div>
  )
}

export default Home