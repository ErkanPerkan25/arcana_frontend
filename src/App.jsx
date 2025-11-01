import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import BooksPage from "./pages/BooksPage";
import { useAuth } from "./components/auth/useAuth";
import NotesPage from "./pages/NotesPage";

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

    const auth = useAuth();
    //const params = use

    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={auth.isAuthenticated ? <HomePage /> : <Navigate to="/login" replace/>} />
                <Route path="/dashboard" element={auth.isAuthenticated ? <DashboardPage /> : <Navigate to="/login" replace/>} />
                <Route path="/signup" element={!auth.isAuthenticated ? <SignUpPage /> : <Navigate to="/login" replace/>} />
                <Route path="/books" element={auth.isAuthenticated ? < BooksPage /> : <Navigate to="/login" replace/>} />
                <Route path="/notes/:book_id" element={auth.isAuthenticated ? <NotesPage book_id={} /> : <Navigate to="/login" replace/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
