import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../helpers/contstants";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="inline-block text-sm">
      <select
        onChange={handleChange}
        value={i18n.language}
        className="bg-white border border-gray-300 rounded px-3 py-1 shadow-sm focus:outline-none"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
