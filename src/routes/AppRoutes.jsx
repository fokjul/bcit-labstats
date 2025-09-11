import { Routes, Route } from "react-router-dom";

import Home from "../utilPages/Home";
import CoursePage from "../prototypes/CoursePage/CoursePage";
import CoursePageCrnApproval from "../prototypes/CoursePageCrnApproval/CoursePageCrnApproval";
import CartPage from "../prototypes/CartPage/CartPage";
import NotFound from "../utilPages/NotFound";
import Prototypes from "../utilPages/Prototypes";
import DonationPage from "../prototypes/Donation/DonationPage/DonationPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/prototypes" element={<Prototypes />} />
      <Route exact path="/prototypes/course" element={<CoursePage />} />
      <Route exact path="/prototypes/courseCRN" element={<CoursePageCrnApproval />} />
      <Route exact path="/prototypes/cart" element={<CartPage />} />
      <Route exact path="/prototypes/donation" element={<DonationPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;