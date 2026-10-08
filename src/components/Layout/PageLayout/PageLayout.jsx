import UtilityMenu from "../../Navigation/UtilityMenuGroup/UtilityMenu/UtilityMenu";
import WebsiteHeader from "../WebsiteHeader/WebsiteHeader";
import Footer from "../Footer/Footer";
import NotificationBar from "../NotificationBar/NotificationBar";
import ChatLauncher from "../ChatLauncher/ChatLauncher";
import LeaveFeedbackButton from "../LeaveFeedbackButton/LeaveFeedbackButton";

const PageLayout = ({children, footerChildren=''}) => {
  return (
    <div>
        <NotificationBar />
        <UtilityMenu />
        <WebsiteHeader />
            <div>{children}</div>
        <Footer />
        <LeaveFeedbackButton />
        <ChatLauncher />
    </div>
  )
}

export default PageLayout