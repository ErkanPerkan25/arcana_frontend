import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

function App() {
    // On page load or when changing theme
    document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark" || 
        (!("theme" in localStorage) && window.matchMedia("prefers-color-scheme: dark").matches),
    );
    // Whenever explicity choice of light mode
    localStorage.theme = "light";
    // Whenever explicity choice of light mode
    localStorage.theme = "dark";
    // Whenever explicity choice of OS preference
    localStorage.removeItem("theme");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
