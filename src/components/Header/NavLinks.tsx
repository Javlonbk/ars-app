import React from "react";
import { useTranslation } from "react-i18next";

interface NavLinksProps {
  onLinkClick?: () => void;
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ onLinkClick, className = "" }) => {
  const { t } = useTranslation();

  const links = [
    { href: "#services", label: t("nav.services") },
    { href: "#why", label: t("nav.why_us") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <>
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className={`text-dark hover:text-primary  ${className}`}
          onClick={onLinkClick}
        >
          {label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
