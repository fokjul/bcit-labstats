import './TopMenu.scss';
import { hamMenu } from '../../../assets/icons';

const NavMenu = () => {
  return (
    <>
      <ul className='navMenu'>
        <li className='navMenu__item'>
          <span className='navMenu__item-text'>Program & Courses</span>
        </li>
        <li className='navMenu__item'>
          <span className='navMenu__item-text'>Admission</span>
        </li>
        <li className='navMenu__item'>
          <span className='navMenu__item-text'>Student Services</span>
        </li>
        <li className='navMenu__item'>
          <span className='navMenu__item-text'>Research</span>
        </li>
        <li className='navMenu__item'>
          <span className='navMenu__item-text'>About BCIT</span>
        </li>
      </ul>
      <div className='navMenu--mobile'>
        <button className='navMenu--mobile__button' type='submit'>
          <img src={hamMenu} alt='menu icon' className='navMenu--mobile__button-icon'/>  
        </button>
    </div>
    </>
     
  )
}

export default NavMenu