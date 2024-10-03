import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  toggleAvailability,
} from "../redux/slices/productSlice";
import "./products.css";
import { useState } from "react";
import { EditProductForm } from "./EditProductForm";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [editingProductId, setEditingProductId] = useState(null);

  const handleEditClick = (productId) => {
    setEditingProductId(productId);
  };

  const handleCloseEditForm = () => {
    setEditingProductId(null);
  };

  return (
    <div>
      {editingProductId && (
        <EditProductForm
          productId={editingProductId}
          onClose={handleCloseEditForm}
        />
      )}

      <h2>Товары</h2>
      {products.length === 0 ? (
        <p>Пока здесь ничего нет</p>
      ) : (
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Цена: {product.price}</p>
              <p>
                Доступность:{" "}
                {product.available ? "Есть в наличии" : "Нет в наличии"}
              </p>
              <div className="product-actions">
                <button
                  className="button"
                  onClick={() => dispatch(deleteProduct(product.id))}
                >
                  Удалить
                </button>
                <button
                  className="button"
                  onClick={() => dispatch(toggleAvailability(product.id))}
                >
                  Изменить доступность
                </button>
                <button
                  className="button"
                  onClick={() => handleEditClick(product.id)}
                >
                  Обновить данные о товаре
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ProductList;
