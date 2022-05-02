import { createContext, ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { decodeToken, getToken, setTokenToCookie } from "../util/tokenUtil";

interface IAuthProps {
  children: ReactNode;
}
const AuthContext = createContext({
  token: "",
  onLogin: (token: string) => {},
  onLogout: () => {},
});
const AuthProvider = ({ children }: IAuthProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(getToken() || "");
  const handleLogout = () => {
    setToken("");
    setTokenToCookie("");
  };
  const handleLogin = (token: string) => {
    setToken(token);
    setTokenToCookie(token);
    var returnPath = Object.values(location.state as Location);
    navigate(returnPath[0].pathname || "/admin");
  };
  const value = {
    token,
    onLogout: handleLogout,
    onLogin: handleLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export { AuthContext, AuthProvider };
