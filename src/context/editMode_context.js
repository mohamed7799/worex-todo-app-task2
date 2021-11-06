import { useState, createContext } from "react";

export const EDITMODE_CONTEXT = createContext({});

export const EDITMODE_CONTEXT_PROVIDER = ({ children }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <EDITMODE_CONTEXT.Provider value={{ editMode, setEditMode }}>
      {children}
    </EDITMODE_CONTEXT.Provider>
  );
};
