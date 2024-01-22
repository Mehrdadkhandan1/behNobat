import { useContext } from "react"
import {BusinessContext} from "../context/BusinessContext"
import { ThemeContext } from "../context/ThemeContex"

export const useBusinessContext = () => {
    const business = useContext(BusinessContext)
    return business
}
export const useThemeContext = () => {
    const theme = useContext(ThemeContext)
    return theme
}