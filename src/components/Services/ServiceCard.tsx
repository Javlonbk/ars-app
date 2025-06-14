import type React from "react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <div className="text-primary mb-4">
        <Icon className="w-12 h-12 mx-auto" />
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
