import UtilityMenu from "../../Navigation/UtilityMenuGroup/UtilityMenu/UtilityMenu";
import WebsiteHeader from "../WebsiteHeader/WebsiteHeader";
import Footer from "../Footer/Footer";

const PageLayout = ({children, footerChildren=''}) => {
  return (
    <div>
        <UtilityMenu />
        <WebsiteHeader />
            <div>{children}</div>
        <Footer />
    </div>
  )
}

export default PageLayout