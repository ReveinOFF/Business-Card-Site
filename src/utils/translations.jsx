export const saveLanguageToLocalStorage = (language) => {
  localStorage.setItem("lng", language);
};

export const getLanguageFromLocalStorage = () => {
  return localStorage.getItem("lng");
};
