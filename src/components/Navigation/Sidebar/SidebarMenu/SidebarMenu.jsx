import { useState } from 'react';
import { arrowForwardBlue,  xmark, plus} from '../../../../assets/icons';
import './SidebarMenu.scss';

const SidebarMenu = () => {
  const [isPlusClicked, setIsPlusClicked] = useState(false)
  return (
    <ul className='sidemenu'>
        <li className='sidemenu__header'>
            <a href='#'>admission</a>
            <button className='sidemenu__header-btn' onClick={() => setIsPlusClicked(prev => !prev)}>
              <img src={isPlusClicked ? xmark : plus}/>
            </button>
        </li>
        <ul className={`sidemenu__list ${isPlusClicked ? "sidemenu__list--display" : ''}`}>
          <li className='sidemenu__list-row'>
          <a className='sidemenu__list-row-link' href='#'>about the Foundation</a>
          <button className='sidemenu__list-row-btn'>
            <img src={arrowForwardBlue}/>
          </button>
          </li>
          <li className='sidemenu__list-row'>
            <a href='#' className='sidemenu__list-row-link'>about the Foundation</a>
          </li>
        </ul>
    </ul>
  )
}

export default SidebarMenu