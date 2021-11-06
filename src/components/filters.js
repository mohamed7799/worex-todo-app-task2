import { useEffect, useState } from "react";
import FilterButton from "./filterButton";
import { TODOS_CONTEXT } from "../context/todos_context";
import { FILTERED_TODOS_CONTEXT } from "../context/filteredTodos_context";
import { useContext } from "react";
const Filters = () => {
  const [modes] = useState(["all", "active", "completed"]);
  const [selectedMode, setSelectedMode] = useState("all");
  const { todos } = useContext(TODOS_CONTEXT);
  const { setFilteredTodos } = useContext(FILTERED_TODOS_CONTEXT);
  const applyFilter = () => {
    if (selectedMode === "active") {
      setFilteredTodos(
        todos.filter((item) => {
          return item.completed === false;
        })
      );
    } else if (selectedMode === "completed") {
      setFilteredTodos(
        todos.filter((item) => {
          return item.completed === true;
        })
      );
    } else {
      setFilteredTodos(todos);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [selectedMode]);

  useEffect(() => {
    setFilteredTodos(todos);
    applyFilter();
  }, [todos]);

  return (
    <div className="flex justify-between">
      {modes.map((mode, index) => (
        <FilterButton
          key={index}
          onClick={() => setSelectedMode(mode)}
          className={`${
            mode === selectedMode
              ? "bg-yellow-600 text-white"
              : "text-yellow-600"
          }`}
        >
          {mode}
        </FilterButton>
      ))}
    </div>
  );
};

export default Filters;
