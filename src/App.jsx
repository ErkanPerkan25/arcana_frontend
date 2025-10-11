import { useEffect } from "react";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import BooksPage from "./pages/BooksPage";
import LoginForm from "./components/LoginForm";

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

    const isAuthenticated = sessionStorage.getItem("sessionID");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={!isAuthenticated ? <LoginPage /> : <HomePage />} />
                <Route path="/dashboard" element={!isAuthenticated ? <LoginPage /> : <DashboardPage />} />
                <Route path="/login" element={!isAuthenticated ? <LoginPage /> :<LoginPage />} />
                <Route path="/signup" element={!isAuthenticated ? <LoginPage /> :<SignUpPage />} />
                <Route path="/books" element={!isAuthenticated ? <LoginPage /> :<BooksPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
