// context/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

interface AdminDetails {
  _id: number;
  email: string;
  first_name: string;
  last_name: string;
    phone_number: string;
    account_type: string;
    role: string;
}

interface AuthContextType {
  token: string | null;
  adminDetails: AdminDetails | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [adminDetails, setAdminDetails] = useState<AdminDetails | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedAdminDetails = localStorage.getItem("adminDetails");
    if (savedToken) setToken(savedToken);
    if (savedAdminDetails) setAdminDetails(JSON.parse(savedAdminDetails));
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("https://api.example.com/login", {
        email,
        password,
      });
      const { token } = response.data.accessToken;
      const { adminDetails } = response.data.admin;

      setToken(token);
      setAdminDetails(adminDetails);

      localStorage.setItem("token", token);
      localStorage.setItem("adminDetails", JSON.stringify(adminDetails));
    } catch (error) {
      console.error("Login error", error);
      throw new Error("Failed to login");
    }
  };

  const logout = () => {
    setToken(null);
    setAdminDetails(null);
    localStorage.removeItem("token");
    localStorage.removeItem("adminDetails");
  };

  return (
    <AuthContext.Provider value={{ token, adminDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
