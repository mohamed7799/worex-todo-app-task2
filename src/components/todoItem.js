import Button from "./button";
import { MdDelete, MdMode } from "react-icons/md";
import { TODOS_CONTEXT } from "../context/todos_context";
import { TASK_CONTEXT } from "../context/task_context";
import { EDITMODE_CONTEXT } from "../context/editMode_context";
import { useContext } from "react";
const TodoItem = ({ taskItem }) => {
  //variables
  const { todos, setTodos } = useContext(TODOS_CONTEXT);
  const { setTask } = useContext(TASK_CONTEXT);
  const { setEditMode } = useContext(EDITMODE_CONTEXT);

  //functions
  const toggleCompletion = () => {
    setTodos(
      todos.map((item) => {
        if (item.text === taskItem.text) {
          return { ...taskItem, completed: !taskItem.completed };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <li
      className={`border-l-4  ${
        taskItem.completed ? "border-green-500" : "border-yellow-600"
      } p-4 flex justify-between items-center bg-white`}
    >
      <p
        onClick={toggleCompletion}
        className={`text-xl cursor-pointer ${
          taskItem.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {taskItem.text}
      </p>
      <div className="flex gap-1">
        <Button
          onClick={() => {
            setTask(taskItem);
            setEditMode(true);
          }}
          className="text-gray-400 hover:text-yellow-600 transition-all duration-300 cursor-pointer"
        >
          <MdMode size="1.5rem"></MdMode>
        </Button>
        <Button
          onClick={() =>
            setTodos(
              todos.filter((item) => {
                return item.text !== taskItem.text;
              })
            )
          }
          className="text-gray-400 hover:text-yellow-600 transition-all duration-300 cursor-pointer"
        >
          <MdDelete size="1.5rem"></MdDelete>
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
