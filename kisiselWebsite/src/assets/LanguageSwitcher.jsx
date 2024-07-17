import { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext';

function LanguageSwitcher() {
  const { dispatch } = useContext(LanguageContext);
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    if (language === 'en') {
      dispatch({ type: 'SET_LANGUAGE', payload: 'tr' });
      setLanguage('tr');
    } else {
      dispatch({ type: 'SET_LANGUAGE', payload: 'en' });
      setLanguage('en');
    }
  };

  return (
    <div className="absolute top-0 right-0 mt-4 mr-4 text-white text-xl">
      <span
        className="text-lime-300 cursor-pointer hover:text-orange-500"
        onClick={toggleLanguage}
      >
        {language === 'en' ? 'Türkçe' : 'English'}
      </span>
      {language === 'en' ? 'ye geç' : 'version'}
    </div>
  );
}

export default LanguageSwitcher;
