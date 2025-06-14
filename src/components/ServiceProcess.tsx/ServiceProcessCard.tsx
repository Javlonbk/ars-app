import React from "react";
import type { IconType } from "react-icons";

interface ServiceProcessCardProps {
  title: string;
  description: string;
  icon: IconType;
  length: number;
  index: number;
}

const ServiceProcessCard: React.FC<ServiceProcessCardProps> = ({
  title,
  description,
  icon: Icon,
  length,
  index,
}) => {
  return (
    <div
      key={index}
      className="flex flex-col items-center text-center relative md:w-1/4"
    >
      <div className="bg-accent text-white p-4 rounded-full text-2xl z-10">
        <Icon />
      </div>
      <div className="mt-4 font-semibold text-lg">{title}</div>
      <p className="text-gray-600 text-sm mt-1">{description}</p>

      {/* Connector line on desktop */}
      {index !== length - 1 && (
        <div className="hidden md:block absolute top-6 right-[-50%] w-full h-1 bg-accent z-0"></div>
      )}
    </div>
  );
};

export default ServiceProcessCard;
