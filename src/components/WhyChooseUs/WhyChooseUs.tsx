import React from "react";
import Heading from "../ui/typography/Heading";
import Card from "./Card";
import { FaTools, FaClock, FaBolt } from "react-icons/fa";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Certified Technicians",
      description:
        "Our experienced HVAC specialists are fully certified to handle all brands and models of air conditioners with expert precision.",
      icon: FaTools,
    },
    {
      title: "Fast & Reliable Service",
      description:
        "We respond quickly and deliver dependable repair and maintenance services to ensure your comfort is never compromised.",
      icon: FaClock,
    },
    {
      title: "Energy Efficiency Experts",
      description:
        "We optimize your AC system for peak performance and lower energy bills, helping you stay cool and cost-effective.",
      icon: FaBolt,
    },
  ];
  return (
    <section id="why" className="bg-white py-16 px-6 text-center">
      <Heading level={2} className="mb-8">
        Why Choose Us
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
