import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router'
import { router } from './route/route'
import { useContext } from 'react'
import ThemeContextProvider, { ThemeContext } from './context/ThemeContextProvider'

// Wrapper component to use the context
function AppWithTheme() {
    const { theTheme } = useContext(ThemeContext)

    return (
        <div data-theme={theTheme ? "light" : "dark"}>
            <ToastContainer />
            <RouterProvider router={router} />
        </div>
    )
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeContextProvider>
            <AppWithTheme />
        </ThemeContextProvider>
    </StrictMode>,
)
