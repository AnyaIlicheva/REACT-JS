import "./App.css";
import TemperatureConverter from "./components/TemperatureConverter/TemperatureConverter";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <TemperatureConverter />
      <TodoList title={"Список дел:"} />
    </div>
  );
}

export default App;
