import type React from "react";
import { FaPhoneAlt, FaClipboardCheck, FaTools, FaSmile } from "react-icons/fa";
import Heading from "../ui/typography/Heading";
import Card from "./Card";

const serviceSteps = [
  {
    title: "Contact Us",
    description: "Call or fill out our form to schedule your AC service.",
    icon: FaPhoneAlt,
  },
  {
    title: "Get a Diagnosis",
    description: "Our technician inspects your system and explains the issue.",
    icon: FaClipboardCheck,
  },
  {
    title: "Service Begins",
    description: "We perform the needed repairs, installation, or maintenance.",
    icon: FaTools,
  },
  {
    title: "Enjoy the Comfort",
    description: "Relax and enjoy cool air with a reliable AC system.",
    icon: FaSmile,
  },
];

const ServiceProcess: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <Heading level={2} className="text-center mb-8">
        Our 4-Step Service Process
      </Heading>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-10 max-w-5xl mx-auto">
        {serviceSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Card
              key={index}
              title={step.title}
              description={step.description}
              icon={Icon}
              length={serviceSteps.length}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ServiceProcess;
