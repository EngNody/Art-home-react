import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

// const initialData = { theme: "Light" };
// my correct way
// const initialData = { theme:  localStorage.getItem("storagetheme") === null? "Light" : localStorage.getItem("storagetheme")}; 
// as ali vedio
const initialData = { theme:  localStorage.getItem("storagetheme") === null? "Light" : localStorage.getItem("storagetheme") ==="Light" ? "Light" : "Dark" };
const reducer = (firstState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...firstState, theme: action.newValue };
    default:
      return firstState;
  }}


export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const toggletheme = (newName) => {
    localStorage.setItem("storagetheme", newName );  
    dispatch({ type: "CHANGE_THEME", newValue: newName });
  };


  return (
     <ThemeContexttt.Provider value={{ ...firstState , toggletheme}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;