import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

interface FaqCardProps {
  question: string;
  answer: string;
}

const FAQCard: React.FC<FaqCardProps> = ({ question, answer }) => (
  <div className="bg-secondary p-6 rounded-xl shadow">
    <div className="flex items-center mb-2 text-primary">
      <FaQuestionCircle className="mr-2 text-accent" />
      <h4 className="text-lg font-semibold">{question}</h4>
    </div>
    <p className="text-dark">{answer}</p>
  </div>
);

export default FAQCard;
