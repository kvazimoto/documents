// components/LanguageSelector.jsx
import { useState, useRef, useEffect } from 'react';
import i18n from '../../i18n';
import './LenguageSelector.css';

const languages = [
  { code: 'ru', label: 'RU' },
  { code: 'uk', label: 'UK' },
  { code: 'en', label: 'EN' },
];

export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState(i18n.language || 'ru');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setSelectedLang(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button className="selector-button" onClick={() => setIsOpen(!isOpen)}>
        {selectedLang.toUpperCase()} ▾
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={`dropdown-item ${selectedLang === lang.code ? 'active' : ''}`}
              onClick={() => changeLanguage(lang.code)}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
