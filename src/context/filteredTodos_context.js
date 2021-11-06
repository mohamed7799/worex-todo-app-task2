import { useState, createContext } from "react";

export const FILTERED_TODOS_CONTEXT = createContext({});

export const FILTERED_TODOS_CONTEXT_PROVIDER = ({ children }) => {
  const [filteredTodos, setFilteredTodos] = useState([]);

  return (
    <FILTERED_TODOS_CONTEXT.Provider
      value={{ filteredTodos, setFilteredTodos }}
    >
      {children}
    </FILTERED_TODOS_CONTEXT.Provider>
  );
};
