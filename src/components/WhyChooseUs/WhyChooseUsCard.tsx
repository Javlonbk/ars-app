import React from "react";
import Paragraph from "../ui/typography/Paragraph";
import Heading from "../ui/typography/Heading";

interface WhyChooseUsCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="bg-white p-6">
      <div className="flex items-center mb-4">
        <Icon className="text-primary text-3xl mr-2" />
        <Heading level={4} className="text-center">
          {title}
        </Heading>
      </div>
      <Paragraph className="text-left">{description}</Paragraph>
    </div>
  );
};

export default WhyChooseUsCard;
