import './DonationPage.scss';
import PageLayout from '../../../components/Layout/PageLayout/PageLayout'
import PageHeader from '../../../components/GeneralTemplates/PageHeader/PageHeader'
import SidebarLayout from '../../../components/Navigation/Sidebar/SidebarLayout/SidebarLayout';
import DonationForm from '../DonationForm/DonationForm';


const DonationPage = () => {
  return (
    <PageLayout>
      <PageHeader
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