import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface MobileMenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({
  isOpen,
  onClick,
}) => (
  <button
    className="md:hidden text-primary focus:outline-none"
    onClick={onClick}
    aria-label="Toggle menu"
    aria-expanded={isOpen}
  >
    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
  </button>
);

export default MobileMenuToggle;
