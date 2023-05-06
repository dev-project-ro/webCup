const I18N_KEY = 'I18N_KEY';

export const setLang = (lang) => {
  localStorage.setItem(I18N_KEY, lang);
};

export const getLang = () => {
 return localStorage.getItem(I18N_KEY) || 'fr';
};