import "./App.css";
import { TodosTable } from "./components/Table";
import { Form } from "./components/Form/Form";
import { useAppSelector } from "./hook/useRedux";

function App() {
  	const todosData = useAppSelector(state => state.todoState.todos)

  return (
    <>
      <Form />
      <TodosTable todosData={todosData}/>

    </>
  );
}

export default App;
