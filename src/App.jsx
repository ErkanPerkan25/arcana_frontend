import {useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import BooksPage from "./pages/BooksPage";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(
        sessionStorage.getItem("sessionID")
    );
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
                <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/books" /> } />
                <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" replace/>} />
                <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" replace/>} />
                <Route path="/signup" element={isAuthenticated ? <SignUpPage /> : <Navigate to="/login" replace/>} />
                <Route path="/books" element={isAuthenticated ? < BooksPage /> : <Navigate to="/login" replace/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
