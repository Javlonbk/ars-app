import React from "react";
import { useTranslation } from "react-i18next";
import FAQCard from "./FAQCard";

const FAQ: React.FC = () => {
  const { t } = useTranslation();

  const feautres = [
    {
      question: t("faq.items.0.question"),
      answer: t("faq.items.0.answer"),
    },
    {
      question: t("faq.items.1.question"),
      answer: t("faq.items.1.answer"),
    },
    {
      question: t("faq.items.2.question"),
      answer: t("faq.items.2.answer"),
    },
  ];

  return (
    <section id="faq" className="bg-white py-16 px-6">
      <h3 className="text-3xl font-bold text-primary mb-10 text-center">
        {t("faq.heading")}
      </h3>
      <div className="space-y-6 max-w-3xl mx-auto">
        {feautres.map((item, index) => (
          <FAQCard key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
