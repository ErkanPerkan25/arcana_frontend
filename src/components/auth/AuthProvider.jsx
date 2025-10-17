import { useState } from "react";
import { useCookies } from "react-cookie";
import AuthContext from "./AuthContext";

const AuthProvider = ({children}) =>{
    const [cookies, setCookie, removeCookie] = useCookies(["isAuthenticated", "username", "token"]);

    const [isAuthenticated, setIsAuthenticated] = useState(cookies.isAuthenticated || false);
    const [username, setUsername] = useState(cookies.username || null);
    const [token, setToken] = useState(cookies.token || null);

    const login = (token, username) =>{
        setIsAuthenticated(true);
        setUsername(username);
        setToken(token);
        setCookie("isAuthenticated", true);
        setCookie("username", username);
        setCookie("token", token);
    }

    const logout = () =>{
        setIsAuthenticated(true);
        setUsername(null);
        setToken(null);
        removeCookie("isAuthenticated");
        removeCookie("username");
        removeCookie("token");
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, username, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
};
export default AuthProvider;
