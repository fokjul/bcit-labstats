import { Routes, Route } from "react-router-dom";

import Home from "../utilPages/Home";
import NotFound from "../utilPages/NotFound";
import Prototypes from "../utilPages/Prototypes";
import DonationPage from "../prototypes/Donation/DonationPage/DonationPage";
import LabAvailabilityPage from "../prototypes/LabAvailabilityPage/LabAvailabilityPage";
import IceChatbot from "../prototypes/IceChatbot/IceChatbot";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/prototypes" element={<Prototypes />} />
      <Route exact path="/prototypes/lab-availability" element={<LabAvailabilityPage />} />
      <Route exact path="/prototypes/donation" element={<DonationPage />} />
      <Route exact path="/prototypes/ice-chatbot" element={<IceChatbot />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;