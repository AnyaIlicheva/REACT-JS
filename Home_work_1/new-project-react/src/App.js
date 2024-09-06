import "./App.css";
import Message from "./components/Message/Message";

function App() {
  return (
    <div className="App">
      <span className="message">
        <Message message="Привет! Мы начали изучение React" />
      </span>
    </div>
  );
}

export default App;
