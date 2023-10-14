import { createContext } from "react";

export interface SharedContextState {
  user: { name: string; email: string; isAdmin: boolean };
}

export const SharedContext = createContext<SharedContextState | undefined>(
  undefined
);

interface SharedContextProviderProps {
  children?: React.ReactNode;
}

export const SharedContextProvider = ({
  children,
}: SharedContextProviderProps) => {
  const user = {
    name: "Marcin",
    email: "marcin.kopanski@silkycoders.com",
    isAdmin: true,
  };

  return (
    <SharedContext.Provider value={{ user }}>{children}</SharedContext.Provider>
  );
};
