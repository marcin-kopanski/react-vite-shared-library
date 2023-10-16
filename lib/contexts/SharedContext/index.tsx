import { createContext, useState } from "react";

export interface User {
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface SharedContextState {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const SharedContext = createContext<{
  state: SharedContextState | undefined;
}>({ state: undefined });

interface SharedContextProviderProps {
  children?: React.ReactNode;
}

export const SharedContextProvider = ({
  children,
}: SharedContextProviderProps) => {
  const [user, setUser] = useState<User>({
    name: "Marcin",
    email: "marcin.kopanski@silkycoders.com",
    isAdmin: true,
  });

  return (
    <SharedContext.Provider value={{ state: { user, setUser } }}>
      {children}
    </SharedContext.Provider>
  );
};
