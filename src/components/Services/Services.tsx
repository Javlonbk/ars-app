import React from "react";
import { useTranslation } from "react-i18next";
import { FaWrench, FaSyncAlt, FaSnowflake } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const Services: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t("services.items.0.title"),
      description: t("services.items.0.description"),
      icon: FaSnowflake,
    },
    {
      title: t("services.items.1.title"),
      description: t("services.items.1.description"),
      icon: FaWrench,
    },
    {
      title: t("services.items.2.title"),
      description: t("services.items.2.description"),
      icon: FaSyncAlt,
    },
  ];
  return (
    <section id="services" className="py-16 px-6 bg-white text-center">
      <h3 className="text-3xl font-bold text-primary mb-10">
        {t("services.heading")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <ServiceCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
