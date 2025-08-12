import { createContext, useEffect, useState } from "react"
export const ThemeContext = createContext()

export default function ThemeContextProvider({ children }) {

    const [theTheme, setTheTheme] = useState(true)
 
    const themeData = {
        theTheme,
        setTheTheme,
    }

    return (
        <>
            <ThemeContext value={themeData}>
                {children}
            </ThemeContext>
        </>
    )
}