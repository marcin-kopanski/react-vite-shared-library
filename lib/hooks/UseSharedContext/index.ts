import { useContext } from "react";
import { SharedContext } from "../../contexts/SharedContext";

export const useSharedContext = () => {
  const context = useContext(SharedContext);

  if (context === undefined) {
    throw new Error("useSharedContext must be used within a SharedContext");
  }

  return context;
};
