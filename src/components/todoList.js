import TodoItem from "./todoItem";
import { TODOS_CONTEXT } from "../context/todos_context";
import { useContext } from "react";
const TodoList = () => {
  const { todos } = useContext(TODOS_CONTEXT);

  return (
    <ul className="flex flex-col gap-4">
      {todos.map((task) => (
        <TodoItem key={task.id} taskItem={task}></TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
