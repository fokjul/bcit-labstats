import './DonationPage.scss';
import PageLayout from '../../../components/Layout/PageLayout/PageLayout'
import GeneralPageHeader from '../../../components/GeneralTemplates/GeneralPageHeader/GeneralPageHeader'
import SidebarLayout from '../../../components/Navigation/Sidebar/SidebarLayout/SidebarLayout';
import DonationForm from '../DonationForm/DonationForm';


const DonationPage = () => {
  return (
    <PageLayout>
      <GeneralPageHeader
        title='Donate Now'
      />
      <div className='contentArea'>
        <SidebarLayout />
        <div className='contentArea_main'>
          <DonationForm />
        </div>
      </div>

    </PageLayout>
  )
}

export default DonationPage