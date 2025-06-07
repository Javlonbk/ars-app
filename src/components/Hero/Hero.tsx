import React from "react";
import heroImage from "../../assets/hero.png";
import Button from "../ui/Button";
import Heading from "../ui/typography/Heading";
import Paragraph from "../ui/typography/Paragraph";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat bg-fixed min-h-[500px] flex items-center px-6 md:px-16"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl text-left text-white space-y-6">
        <Heading level={1} className="text-white">
          Reliable Air Conditioner Services
        </Heading>
        <Paragraph className="text-white">
          We offer expert air conditioning installation, fast and reliable
          repair services, and ongoing maintenance to ensure optimal performance
          and comfort in your home or business — all year round.
        </Paragraph>
        <Button>Book a Service</Button>
      </div>
    </section>
  );
};

export default Hero;
