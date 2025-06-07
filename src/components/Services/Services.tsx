import React from "react";
import { FaWrench, FaSyncAlt, FaSnowflake } from "react-icons/fa";
import Card from "./Card";

const services = [
  {
    title: "AC Installation",
    description:
      "We provide expert installation of all types of air conditioning systems, ensuring maximum performance and energy efficiency from day one.",
    icon: FaSnowflake,
  },
  {
    title: "AC Repair",
    description:
      "Our technicians quickly diagnose and repair issues to restore your cooling system to peak condition, no matter the brand or model.",
    icon: FaWrench,
  },
  {
    title: "AC Maintenance",
    description:
      "Regular servicing helps prevent costly breakdowns and extends the life of your AC. We offer thorough checkups and tune-ups.",
    icon: FaSyncAlt,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 px-6 bg-white text-center">
      <h3 className="text-3xl font-bold text-primary mb-10">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
