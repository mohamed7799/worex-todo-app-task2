import TodoItem from "./todoItem";
import { FILTERED_TODOS_CONTEXT } from "../context/filteredTodos_context";
import { useContext } from "react";
const TodoList = () => {
  const { filteredTodos } = useContext(FILTERED_TODOS_CONTEXT);

  return (
    <ul className="flex flex-col gap-4 max-h-96 overflow-y-scroll pr-2">
      {filteredTodos.map((task) => (
        <TodoItem key={task.id} taskItem={task}></TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
