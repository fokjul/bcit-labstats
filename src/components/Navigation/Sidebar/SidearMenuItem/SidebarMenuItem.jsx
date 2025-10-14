import  './SidebarMenuItem.scss';
import { arrowForwardBlue} from '../../../../assets/icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SidebarMenuItem = ({item, index}) => {
  const [openFirstLevel, setOpenFirstLevel] = useState(true);
  const [openSecondLevel, setOpenSecondLevel] = useState(true);

  const toggleFirstLevel = () => {
    setOpenFirstLevel(prev => !prev);
  };

  const toggleSecondLevel = () => {
    setOpenSecondLevel(prev => !prev);
  };

  return (
    <li className="sidemenu-item" key={`item-${index}`}>
        <div className='sidemenu-item__parent'>
          <div>
          <NavLink 
            to={item.link} 
          >
            {item.title}
          </NavLink>
          {item.children && item.children.length > 0 && (
          <button onClick={toggleFirstLevel} id='menu-toggle-button'>
            <img src={arrowForwardBlue} className={openFirstLevel ? 'sidemenu-item__parent-icon--rotated' : ''}/>
          </button>
          )}
          </div>
        </div>
        {openFirstLevel && item.children && item.children.length > 0 && (
          <ul className="sidemenu-item__child">
            {item.children.map((child, index) => (
              <li className='sidemenu-item__parent'>
                <div>
                  <a  href={child.link}>{child.title}</a>
                  {child.children && child.children.length > 0 && (
                  <button onClick={toggleSecondLevel} id='menu-toggle-button'>
                    <img src={arrowForwardBlue} className={openSecondLevel ? 'sidemenu-item__parent-icon--rotated' : ''}/>
                  </button>
                  )}
                </div>

              {openSecondLevel && child.children && child.children.length > 0 && (
                <ul className="sidemenu-item__child">
                  {child.children.map((grandChild, index) => (
                    <li className='sidemenu-item__parent'>
                    <a  href={grandChild.link}>{grandChild.title}</a>
                  </li>
                  ))}
                </ul>
              )}
            </li>
              // <li className='sidemenu-item__child-item' key={`child-${index}`}>
              //   <a href={child.link}>{child.title}</a>
              // </li>
            ))}
          </ul>
        )}
    </li> 
  )
}

export default SidebarMenuItem