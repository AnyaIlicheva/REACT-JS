import { Provider } from "react-redux";
import "./App.css";
import ProductList from "./components/ProductsList";
import { store } from "./redux/store";
import AddProduct from "./components/AddProduct";
import { EditProductForm } from "./components/EditProductForm";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Каталог товаров</h1>
        <AddProduct />
        <ProductList />
        <EditProductForm />
      </div>
    </Provider>
  );
}

export default App;
