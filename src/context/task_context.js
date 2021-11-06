import { useState, createContext } from "react";

export const TASK_CONTEXT = createContext({});

export const TASK_CONTEXT_PROVIDER = ({ children }) => {
  const [task, setTask] = useState({
    text: "",
    completed: false,
    id: Math.random(),
  });

  return (
    <TASK_CONTEXT.Provider value={{ task, setTask }}>
      {children}
    </TASK_CONTEXT.Provider>
  );
};
