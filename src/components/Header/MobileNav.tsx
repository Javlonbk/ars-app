import React from "react";
import NavLinks from "./NavLinks";

interface MobileNavProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onLinkClick }) => {
  if (!isOpen) return null;

  return (
    <nav className="absolute z-50 top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
      <NavLinks onLinkClick={onLinkClick} />
    </nav>
  );
};

export default MobileNav;
