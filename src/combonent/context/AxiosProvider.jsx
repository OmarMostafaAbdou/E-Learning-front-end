import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [UserID, setUserID] = useState(null);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userImg, setUserImg] = useState(null);

  useEffect(() => {
    const storedUserID = localStorage.getItem("userID");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUserID && storedUser) {
      setIsAuthenticated(true);
      setUserID(storedUserID);
      setUser(storedUser);
      setUserRole(storedUser.role);
      setUserName(storedUser.fullName);
      setUserImg(storedUser.imgURL);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));

    setIsAuthenticated(true);

    setUserID(userData._id);
    setUser(userData);
    setUserRole(userData.role);
    setUserName(userData.fullName);
    setUserImg(userData.imgURL);
    localStorage.setItem("userID", userData._id);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserID(null);
    setUserRole(null);
    setUserName(null);
    setUserImg(null);
    localStorage.removeItem("userID");
    localStorage.removeItem("user");
  };

  const isAdmin = () => userRole === "admin";
  const isInstructor = () => userRole === "instructor";
  const isStudent = () => userRole === "student";

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        UserID,
        userRole,
        userName,
        userImg,
        login,
        logout,
        isAdmin,
        isInstructor,
        isStudent,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
