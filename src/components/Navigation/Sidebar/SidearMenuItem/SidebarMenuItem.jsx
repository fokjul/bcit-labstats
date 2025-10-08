import  './SidebarMenuItem.scss';
import { arrowForwardBlue} from '../../../../assets/icons';
import { useState } from 'react';

const SidebarMenuItem = ({item, index}) => {
  const [openItems, setOpenItems] = useState(false);

  const toggleItem = () => {
    setOpenItems(prev => !prev);
    console.log(openItems)
  };

  return (
    <li className="sidemenu-item" key={`item-${index}`}>
        <div className='sidemenu-item__parent'>
          <a  href={item.link}>{item.title}</a>
          {item.children && item.children.length > 0 && (
          <button onClick={() => toggleItem()} id='menu-toggle-button'>
            <img src={arrowForwardBlue} className={openItems ? 'sidemenu-item__parent-icon--rotated' : ''}/>
          </button>
          )}
        </div>
        <ul className={`sidemenu-item__child ${openItems ? "sidemenu__list--display" : 'hidden'}`}>
            {item.children.map((child, index) => (
              <li className='sidemenu-item__child-item' key={`child-${index}`}>
                <a href={child.link}>{child.title}</a>
              </li>
            ))}
          </ul>
    </li> 
  )
}

export default SidebarMenuItem