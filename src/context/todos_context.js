import { useState, createContext, useEffect } from "react";

export const TODOS_CONTEXT = createContext({});

let defaultTodos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

export const TODOS_CONTEXT_PROVIDER = ({ children }) => {
  const [todos, setTodos] = useState(defaultTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TODOS_CONTEXT.Provider value={{ todos, setTodos }}>
      {children}
    </TODOS_CONTEXT.Provider>
  );
};
