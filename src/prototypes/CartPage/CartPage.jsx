import "./CartPage.scss";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

//Components
import Breadcrumbs from "../../components/CourseTemplates/Breadcrumbs/Breadcrumbs";
import Notice from "../../components/Panels/Notice/Notice";
import CartPageHeader from "../../components/CourseTemplates/CartPageHeader/CartPageHeader";
import SideBar from "../../components/CourseTemplates/SideBar/SideBar";
import PageLayout from "../../components/Layout/PageLayout/PageLayout";
import ButtonPrimary from "../../components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import Modal from "../../components/GeneralTemplates/Modal/Modal";


const CartPage = () => {

//Passes courses added to cart to the Cart page
const location = useLocation()
const coursesAddedToCart = location.state

const [isModalOpen, setIsModalOpen] = useState(false)

const openModal = () => {
  setIsModalOpen(true)
}

const closeModal = () => {
  setIsModalOpen(false)
}

  // Toggle overflow on body when modal is open/closed
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

return (
  <>
    {isModalOpen && <Modal closeModal={closeModal}/>}
    <PageLayout>
    <div className={`cartPage ${isModalOpen && 'overflowHidden'}`}>
    <Breadcrumbs />
    <CartPageHeader
      title="Cart"
    />
    <div className="cartPage__contentArea">
      <SideBar />
      <div className="contentArea__main">
        <Notice
          heading="International Fees"
          descr="International fees are typically 3.12 times the domestic tuition. Exact cost will be calculated upon completion of registration."
          type="info"
        />
        <h2>
          {`You have ${coursesAddedToCart.length} ${coursesAddedToCart.length > 1 ? "courses" : "course"} in your cart`}
        </h2>
        <p>You will be registered in the following course offering(s) immediately upon log-in to the BCIT Student Information System. Prior to registration, please ensure that you have read the notes on each course for which you are registering.
        </p>
        <ButtonPrimary 
          label="Continue to Registration"
          handleBtnClick={openModal}
        />  
      </div>
      
    </div>

  </div>
  </PageLayout>
  </>
  
  
);
};

export default CartPage;
