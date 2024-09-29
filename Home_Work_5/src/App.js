import "./App.css";
import React, { useEffect, useState } from "react";
import { UserContext } from "./Contexts/UserContext";
import Header from "./components/header";
import Footer from "./components/footer";
import { MainWithLoading } from "./components/main";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("Гость");

  useEffect(
    () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    },
    { setIsLoading }
  );

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ userName, setUserName }}>
        <Header />
        <MainWithLoading isLoading={isLoading} />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};
export default App;
