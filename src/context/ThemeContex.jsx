import { createContext } from "react";
const theme = {
    primaryColor: '#2AA7FF',
    secondaryColor: '#4B73B8',
    tertiaryColor: '#515151',
}
export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )

}