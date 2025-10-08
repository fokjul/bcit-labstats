import { useState } from 'react';
import { arrowForwardBlue,  xmark, plus, arrowDownBlue} from '../../../../assets/icons';
import './SidebarMenu.scss';

const SidebarMenu = ({content}) => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (key) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <ul className='sidemenu'>
        <li className='sidemenu__header'>
            <a href='#'>{content.sectionTitle}</a>
            <button onClick={() => toggleItem('header')}>
              <img src={openItems['header'] ? xmark : plus} />
            </button>
        </li>
        <ul className={`sidemenu__list ${openItems['header'] ? "sidemenu__list--display" : ''}`}>
          {content.items.map((item, index) => {
            return (
              <li className="sidemenu__list-row" key={`item-${index}`}>
                <a className='sidemenu__list-row-link' href={item.link}>{item.title}</a>
                {item.children && item.children.length > 0 && (
                  <button onClick={() => toggleItem(index)}>
                  <img src={openItems[index] ? arrowDownBlue : arrowForwardBlue} />
                </button>
                )}
          </li> )
          })
          }
          
        </ul>
    </ul>
  )
}

export default SidebarMenu