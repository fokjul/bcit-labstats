import './UtilityMenu.scss';
import UtilityMenuItem from '../UtilityMenuItem/UtilityMenuItem';

const UtilityMenu = () => {
  return (
    <div className='navbar-util'>
      <div className='navbar-util__container'>
        <ul className='navbar-util__menu'>
          <UtilityMenuItem menuItem='learning hub'/>
          <UtilityMenuItem menuItem='mybcit'/>
          <UtilityMenuItem menuItem='students'/>
          <UtilityMenuItem menuItem='staff'/>
          <UtilityMenuItem menuItem='events'/>
        </ul>
      </div>
    </div> 
  )
}

export default UtilityMenu