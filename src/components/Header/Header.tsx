import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenuToggle from "./MobileMenuToggle";
import MobileNav from "./MobileNav";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-8 flex justify-between items-center relative">
      <Logo />

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-6">
        <NavLinks />
      </nav>

      {/* Mobile menu toggle */}
      <MobileMenuToggle isOpen={isMenuOpen} onClick={toggleMenu} />

      {/* Mobile nav */}
      <MobileNav isOpen={isMenuOpen} onLinkClick={closeMenu} />
    </header>
  );
};

export default Header;
