"use client"

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface admin {
  _id: number;
  email: string;
  first_name: string;
  last_name: string;
    phone_number: string;
    account_type: string;
    role: string;
}

interface AuthContextType {
  accessToken: string | null;
  admin: admin | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [admin, setAdmin] = useState<admin | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedaccessToken = localStorage.getItem("accessToken");
    const savedadmin = localStorage.getItem("admin");
    if (savedaccessToken) setAccessToken(savedaccessToken);
    if (savedadmin) setAdmin(JSON.parse(savedadmin));
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL+"/auth/admin-login",
        {
          email,
          password,
        }
      );

      if (response.status === 201 && response.data.status) {
         const { accessToken, admin } = response.data.data;

         setAccessToken(accessToken);
         setAdmin(admin);

         localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("admin", JSON.stringify(admin));
        router.push("/dashboard");
      }
     
    } catch (error) {
      console.error("Login error", error);
      throw new Error("Failed to login");
    }
  };

  const logout = () => {
    setAccessToken(null);
    setAdmin(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("admin");
  };

  return (
    <AuthContext.Provider value={{ accessToken, admin, login, logout }}>
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
