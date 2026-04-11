export const toggleTheme = () => {
  document.documentElement.classList.toggle("light");
};

export const isLight = () => 
  document.documentElement.classList.contains("light");