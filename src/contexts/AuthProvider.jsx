import React, { useEffect, useState, createContext } from "react";
import { useContext } from "react";

// Replace the import statements with your own authentication functions
// and any other necessary imports for JWT authentication
import { loginUser, registerUser, logoutUser, checkLoggedIn } from "./AuthService";

export const AuthContext = createContext();
export const useAuth = () => {
  // Your custom hook logic to use the authentication context
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password) => {
    setLoading(true);
    try {
      // Replace with your own registration logic
      const userData = await registerUser(email, password);
      setUser(userData);
      setLoading(false);
    } catch (error) {
      // Handle registration error
      console.error("Registration error:", error);
      setLoading(false);
      throw error; // Rethrow the error for handling in the component
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Replace with your own login logic
      const userData = await loginUser(email, password);
      setUser(userData);
      setLoading(false);
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
      setLoading(false);
      throw error; // Rethrow the error for handling in the component
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      // Replace with your own logout logic
      await logoutUser();
      setUser(null);
      setLoading(false);
    } catch (error) {
      // Handle logout error
      console.error("Logout error:", error);
      setLoading(false);
      throw error; // Rethrow the error for handling in the component
    }
  };

  useEffect(() => {
    const checkLoggedInUser = async () => {
      setLoading(true);
      try {
        // Replace with your own checkLoggedIn logic
        const userData = await checkLoggedIn();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        // Handle checkLoggedIn error
        console.error("Check logged-in error:", error);
        setLoading(false);
      }
    };

    checkLoggedInUser();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
