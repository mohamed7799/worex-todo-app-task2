import { useState, createContext } from "react";
import { nanoid } from "nanoid";
export const TASK_CONTEXT = createContext({});

export const TASK_CONTEXT_PROVIDER = ({ children }) => {
  const [task, setTask] = useState({
    text: "",
    completed: false,
    id: nanoid(),
  });

  return (
    <TASK_CONTEXT.Provider value={{ task, setTask }}>
      {children}
    </TASK_CONTEXT.Provider>
  );
};
