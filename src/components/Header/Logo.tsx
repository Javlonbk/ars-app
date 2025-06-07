import React from "react";
import { FaSnowflake } from "react-icons/fa";

const Logo: React.FC = () => (
  <div className="flex items-center gap-2">
    <FaSnowflake className="text-primary text-2xl" />
    <h1 className="text-xl font-bold text-primary">CoolAir Services</h1>
  </div>
);

export default Logo;
