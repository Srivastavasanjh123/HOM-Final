import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import UserSearch from "./components/UserSearch";
import ServiceCards from "./components/ServiceCards";
import PricingTable from "./components/PricingTable";
import ContactForm from "./components/ContactForm";
//import Footer from "./components/Footer";
import "./styles/styles.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <UserSearch />
      <ServiceCards />
      <PricingTable />
      <ContactForm />
      
    </>
  );
}

export default App;
