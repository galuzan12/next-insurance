import translations from '../config/translations';

export const useTranslations = path => {
  const pathArray = path.split('.');
  let currentPath = translations;
  pathArray.forEach(p => {
    currentPath = currentPath[p];
  });

  return currentPath;
};
