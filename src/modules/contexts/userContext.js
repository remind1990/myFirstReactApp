import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react';

export const UserContext = createContext({ name: '' });

export function useUsersContentHook() {
  return useContext(UserContext);
}
export default function UserProvider({ children }) {
  const [LoggedUser, setLoggedUser] = useState({ name: '' });

  const login = useCallback(() => {
    setLoggedUser({ name: 'Alex' });
  }, []);

  const logout = useCallback(() => {
    setLoggedUser(null);
  }, []);

  const contextValues = useMemo(
    () => ({
      isLoggedIn: !!LoggedUser,
      LoggedUser,
      login,
      logout,
    }),
    [LoggedUser, login, logout]
  );

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
}
