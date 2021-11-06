import Filters from "./components/filters";
import Header from "./components/header";
import InputField from "./components/inputField";
import TodoContainer from "./components/todoContainer";
import TodoList from "./components/todoList";
import { EDITMODE_CONTEXT_PROVIDER } from "./context/editMode_context";
import { FILTERED_TODOS_CONTEXT_PROVIDER } from "./context/filteredTodos_context";
import { TASK_CONTEXT_PROVIDER } from "./context/task_context";
import { TODOS_CONTEXT_PROVIDER } from "./context/todos_context";

const App = () => {
  return (
    <main className="min-h-screen flex items-baseline justify-center">
      <FILTERED_TODOS_CONTEXT_PROVIDER>
        <EDITMODE_CONTEXT_PROVIDER>
          <TASK_CONTEXT_PROVIDER>
            <TODOS_CONTEXT_PROVIDER>
              <TodoContainer>
                <Header></Header>
                <InputField></InputField>
                <Filters></Filters>
                <TodoList></TodoList>
              </TodoContainer>
            </TODOS_CONTEXT_PROVIDER>
          </TASK_CONTEXT_PROVIDER>
        </EDITMODE_CONTEXT_PROVIDER>
      </FILTERED_TODOS_CONTEXT_PROVIDER>
    </main>
  );
};

export default App;
