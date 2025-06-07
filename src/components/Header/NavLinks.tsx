import React from "react";

interface NavLinksProps {
  onLinkClick?: () => void;
  className?: string;
}

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const NavLinks: React.FC<NavLinksProps> = ({ onLinkClick, className = "" }) => (
  <>
    {links.map(({ href, label }) => (
      <a
        key={href}
        href={href}
        className={`text-dark hover:text-primary ${className}`}
        onClick={onLinkClick}
      >
        {label}
      </a>
    ))}
  </>
);

export default NavLinks;
