import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-white py-8 px-6 text-center">
      <div className="mb-4">
        <h4 className="text-xl font-bold mb-2">AC Service Pro</h4>
        <p>{t("footer.title")}</p>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" className="text-white hover:text-light">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-white hover:text-light">
          <FaInstagram size={20} />
        </a>
        <a href="tel:+1234567890" className="text-white hover:text-light">
          <FaPhoneAlt size={20} />
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear() + " " + t("footer.copyright")}.
      </p>
    </footer>
  );
};

export default Footer;
