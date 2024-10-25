import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import AuthPage from "./Account/AuthPage"
import AuthLoginTailor from './Pages/Home/AuthLoginTailor';
import Registration from './Account/registration/Registration';
import Dashboard from './Pages/TailorInterface/Dashboard';
import PendingOrders from './Pages/TailorInterface/PendingOrders';
import CompletedOrders from './Pages/TailorInterface/CompletedOrders';
import CancelledOrders from './Pages/TailorInterface/CancelledOrders';
import ServicesCustomization from './Pages/TailorInterface/ServicesCustomization';
import FAQs from './Pages/TailorInterface/FAQs';
import EditProfile from './Pages/TailorInterface/EditProfile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<AuthPage />} />
        <Route path="/authlogintailor" element={<AuthLoginTailor />} />
        <Route path="/tailor-registration" element={<Registration />} />
        <Route path="/tailor-dashboard" element={<Dashboard />} />
        <Route path="/pending-orders" element={<PendingOrders />} />
        <Route path="/completed-orders" element={<CompletedOrders />} />
        <Route path="/cancelled-orders" element={<CancelledOrders />} />
        <Route path="/services-customization" element={<ServicesCustomization />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </>
  );
}

export default App;
