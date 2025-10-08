import { useState } from 'react';
import './SidebarMenu.scss';
import SidebarMenuItem from '../SidearMenuItem/SidebarMenuItem';
import { arrowForwardBlue,  xmark, plus, arrowDownBlue} from '../../../../assets/icons';

const SidebarMenu = ({content}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  }
  
  return (
    <div className='sidemenu'>
        <div className='sidemenu__header'>
            <a href='#'>{content.sectionTitle}</a>
            <button className='sidemenu__header-btn' type='button' onClick={() => toggleMobileMenu()}>
              <img src={isMobileMenuOpen ? xmark : plus} />
            </button>
        </div>
        <ul className={`sidemenu__list ${isMobileMenuOpen ? "sidemenu__list-open" : " "}`}>
          {content.items.map((item, index) => {
            return (
              <SidebarMenuItem 
                key={index}
                item={item}
              />
            )
          })}
        </ul>
    </div>
  )
}

export default SidebarMenu