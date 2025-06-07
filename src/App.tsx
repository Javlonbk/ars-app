import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Location from "./components/Location/Location";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ServiceProcess from "./components/ServiceProcess.tsx/ServiceProcess";
import LiveChat from "./components/LiveChat";

const App: React.FC = () => {
  return (
    <div className="font-sans text-dark bg-light">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Location />
      <FAQ />
      <ServiceProcess />
      <Footer />
      <LiveChat />
    </div>
  );
};

export default App;
