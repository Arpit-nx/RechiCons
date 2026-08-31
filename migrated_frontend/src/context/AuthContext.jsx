
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if admin is already logged in
  // when the application starts
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const storedAdmin = localStorage.getItem("admin");

    if (token) {
      setIsAuthenticated(true);
    }

    if (storedAdmin) {
      try {
        setAdmin(JSON.parse(storedAdmin));
      } catch (error) {
        console.error("Failed to parse admin data");
        localStorage.removeItem("admin");
      }
    }

    setLoading(false);
  }, []);

  // Called after successful login
  const login = (data) => {
    const token = data?.token?.access_token;
    const user = data?.user;

    if (!token) {
      throw new Error("Access token not found.");
    }

    localStorage.setItem(
      "access_token",
      token
    );

    localStorage.setItem(
      "admin",
      JSON.stringify(user)
    );

    setIsAuthenticated(true);
    setAdmin(user);
  };

  // Logout admin
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("admin");

    setIsAuthenticated(false);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        admin,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}

