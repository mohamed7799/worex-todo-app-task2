import Button from "./button";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { TODOS_CONTEXT } from "../context/todos_context";
import { TASK_CONTEXT } from "../context/task_context";
import { useContext } from "react";
import { EDITMODE_CONTEXT } from "../context/editMode_context";
import { nanoid } from "nanoid";
const InputField = () => {
  //variables
  const { task, setTask } = useContext(TASK_CONTEXT);
  const { todos, setTodos } = useContext(TODOS_CONTEXT);
  const { editMode, setEditMode } = useContext(EDITMODE_CONTEXT);

  //functions
  const addTask = () => {
    if (task) {
      if (!editMode) {
        setTodos((prevState) => [...prevState, { text: task.text, ...task }]);
      } else {
        setTodos(
          todos.map((item) => {
            if (item.id === task.id) {
              return { ...task, text: task.text };
            } else {
              return item;
            }
          })
        );
        setEditMode(false);
      }
      setTask({ text: "", completed: false, id: nanoid() });
    } else {
      alert("Please enter a task");
    }
  };

  return (
    <div className="w-full flex items-center gap-2 border rounded-sm border-gray-300 p-2 bg-white">
      <input
        value={task.text}
        onChange={(e) =>
          setTask((prevState) => ({ ...prevState, text: e.target.value }))
        }
        type="text"
        className="text-xl text-gray-700 focus:outline-none us w-full px-2"
      />
      <Button onClick={addTask} className="text-yellow-600">
        <MdOutlineAddCircleOutline size="2rem"></MdOutlineAddCircleOutline>
      </Button>
    </div>
  );
};

export default InputField;
