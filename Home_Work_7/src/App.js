import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchUsers } from "./redux/userReduser";
import { fetchUser } from "./redux/oneUserReducer";

function App() {
  const { users, loading, error } = useSelector((state) => state.users);
  const { user, loadingUser, errorUser } = useSelector((state) => state.user);
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handlerClick = (userId) => {
    setUserId(userId);
    dispatch(fetchUser(userId));
  };

  return (
    <div className="App">
      <h1>Пользователи</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error} </p>}
      {users.length ? (
        <ul>
          {users.map((person) => (
            <details key={person.id} onClick={() => handlerClick(person.id)}>
              <summary>{person.name}</summary>
              {loadingUser && <p>Загрузка...</p>}
              {errorUser && <p>Ошибка {errorUser}</p>}
              {userId === person.id ? (
                <div>
                  <p>User name: {person.username}</p>
                  <p>e-mail: {person.email}</p>
                </div>
              ) : null}
            </details>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default App;
