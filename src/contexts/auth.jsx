import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuth(false);
    }
  }, [isAuth]);

  function login(token, login) {
    localStorage.setItem("token", token);
    localStorage.setItem("userName", login);
    setIsAuth(true);
    navigate("/vieworders");
  }

  function logout() {
    localStorage.removeItem("token");
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
