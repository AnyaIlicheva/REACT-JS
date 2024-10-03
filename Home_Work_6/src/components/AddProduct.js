import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/productSlice";
import { useState } from "react";
import "./products.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({ name, description, price: parseFloat(price), available })
    );
    setName("");
    setDescription("");
    setPrice("");
    setAvailable(true);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          Название
          <input
            type="text"
            placeholder="Название товара"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Описание товара
          <input
            type="text"
            placeholder="Описание товара"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <label>
          Цена
          <input
            type="number"
            placeholder="Цена"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>

        <label>
          Доступность
          <input
            type="checkbox"
            placeholder="Доступность"
            value={available}
            onChange={(e) => setAvailable(e.target.checked)}
            required
          />
        </label>
        <button className="button" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
