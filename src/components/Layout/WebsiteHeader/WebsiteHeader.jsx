import './WebsiteHeader.scss'
import SearchBarLarge from '../../Atoms/SearchBarLarge/SearchBarLarge'
import TopMenu from '../../Navigation/TopMenu/TopMenu';
import Logo from '../../Atoms/Logo/Logo';


const WebsiteHeader = () => {
  return (
    <div className='navMenuBar'>
        <div className='navMenuBar__container'>
          <Logo />
          <div className='navMenuBar__menu-container'>
            <TopMenu />
            <SearchBarLarge />
          </div>
          
        </div>
    </div>
  )
}

export default WebsiteHeader