import React from "react";
import Heading from "../ui/typography/Heading";
import { FaTools, FaClock, FaBolt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import WhyChooseUsCard from "./WhyChooseUsCard";

const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t("why_choose_us.items.0.title"),
      description: t("why_choose_us.items.0.description"),
      icon: FaTools,
    },
    {
      title: t("why_choose_us.items.1.title"),
      description: t("why_choose_us.items.1.description"),
      icon: FaClock,
    },
    {
      title: t("why_choose_us.items.2.title"),
      description: t("why_choose_us.items.2.description"),
      icon: FaBolt,
    },
  ];
  return (
    <section id="why" className="bg-white py-16 px-6 text-center">
      <Heading level={2} className="mb-8">
        {t("why_choose_us.heading")}
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <WhyChooseUsCard
            title={item.title}
            description={item.description}
            key={index}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
