import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="bg-white py-16 px-6">
      <h3 className="text-3xl font-bold text-primary mb-10 text-center">
        Frequently Asked Questions
      </h3>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="bg-secondary p-6 rounded-xl shadow">
          <div className="flex items-center mb-2 text-primary">
            <FaQuestionCircle className="mr-2 text-accent" />
            <h4 className="text-lg font-semibold">
              How often should I service my AC?
            </h4>
          </div>
          <p className="text-dark">
            We recommend at least once a year, preferably before the hot season
            starts.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-xl shadow">
          <div className="flex items-center mb-2 text-primary">
            <FaQuestionCircle className="mr-2 text-accent" />
            <h4 className="text-lg font-semibold">
              Do you provide emergency repairs?
            </h4>
          </div>
          <p className="text-dark">
            Yes, we offer 24/7 emergency AC repair services in your area.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-xl shadow">
          <div className="flex items-center mb-2 text-primary">
            <FaQuestionCircle className="mr-2 text-accent" />
            <h4 className="text-lg font-semibold">
              What brands do you service?
            </h4>
          </div>
          <p className="text-dark">
            We handle all major brands including LG, Samsung, Daikin, Carrier,
            and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
