import SidebarMenu from '../SidebarMenu/SidebarMenu';
import SidebarNotices from '../SidebarNotices/SidebarNotices';
import './SidebarLayout.scss';

const SidebarLayout = () => {
    return (
        <div className='sidebarLayout'>
              <SidebarMenu />
              <SidebarNotices />

        </div>
      )
}

export default SidebarLayout