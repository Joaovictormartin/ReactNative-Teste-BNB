import {
  useMemo,
  useState,
  ReactNode,
  useContext,
  useCallback,
  createContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';

interface UserPermission {
  id: string;
  name: string;
  hash: string;
  login: string;
  password: string;
}

interface AuthContextProps {
  user?: UserPermission | null;
  isAuthenticated: boolean;
  logout: () => void;
  login: (login: string, password: string) => Promise<UserPermission | null>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AUTH_STORAGE_KEY = '@dataUser';

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserPermission | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(async (login: string, password: string) => {
    try {
      const response = await api.get('/users', { params: { login, password } });
      const userFind = response.data[0] ?? null;

      if (!userFind) return null;

      setUser(userFind);
      await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userFind));

      return userFind;
    } catch (error: any) {
      console.log('Erro no login:', error);
      return null;
    }
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
    AsyncStorage.removeItem(AUTH_STORAGE_KEY);
  }, []);

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  useEffect(() => {
    const getUser = async () => {
      const jsonValue = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
      if (jsonValue !== null) setUser(JSON.parse(jsonValue));
    };
    getUser();
  }, []);

  const authContextValue = useMemo(
    () => ({ user, isAuthenticated, login, logout }),
    [user, isAuthenticated, login, logout],
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider.');
  }

  return context;
};
