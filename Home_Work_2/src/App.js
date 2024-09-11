import "./App.css";
import "./components/CommentsList/CommentsList.css";
import CommentsList from "./components/CommentsList/CommentsList";

function App() {
  return (
    <div className="App">
      <h1>Комментарии</h1>

      <CommentsList />
    </div>
  );
}

export default App;
