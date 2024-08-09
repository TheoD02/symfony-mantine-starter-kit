import { useLocalStorage } from "@mantine/hooks";
import { createContext, useState, useEffect, ReactNode } from "react";

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (jwtToken: string, user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  login: (jwtToken: string, user: User) => {
    console.log("You should implement login");
  },
  logout: () => {
    console.log("You should implement logout");
  },
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser, removeUser] = useLocalStorage<User | null>({
    key: "user",
    defaultValue: null,
  });
  const [token, setToken, removeToken] = useLocalStorage<string | null>({
    key: "token",
    defaultValue: null,
  });

  const login = (jwtToken: string, user: User) => {
    setUser(user);
    setToken(jwtToken);
  };

  const logout = () => {
    removeToken();
    removeUser();
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
