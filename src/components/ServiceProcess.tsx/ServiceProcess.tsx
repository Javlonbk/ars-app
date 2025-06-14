import type React from "react";
import { FaPhoneAlt, FaClipboardCheck, FaTools, FaSmile } from "react-icons/fa";
import Heading from "../ui/typography/Heading";
import ServiceProcessCard from "./ServiceProcessCard";
import { useTranslation } from "react-i18next";

const ServiceProcess: React.FC = () => {
  const { t } = useTranslation();

  const serviceSteps = [
    {
      title: t("service_process.items.0.title"),
      description: t("service_process.items.0.description"),
      icon: FaPhoneAlt,
    },
    {
      title: t("service_process.items.1.title"),
      description: t("service_process.items.1.description"),
      icon: FaClipboardCheck,
    },
    {
      title: t("service_process.items.2.title"),
      description: t("service_process.items.2.description"),
      icon: FaTools,
    },
    {
      title: t("service_process.items.3.title"),
      description: t("service_process.items.3.description"),
      icon: FaSmile,
    },
  ];
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <Heading level={2} className="text-center mb-8">
        {t("service_process.heading")}
      </Heading>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-10 max-w-5xl mx-auto">
        {serviceSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <ServiceProcessCard
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
