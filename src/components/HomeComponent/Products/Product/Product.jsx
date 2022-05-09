import React from "react";
import { FaPlus, FaCheck, FaHeart, FaRegHeart } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { addToCart, deleteProduct } from "../../../../store/cart";
import { putProduct } from "../../../../store/products";
import { useDispatch, useSelector } from "react-redux";
import "./product.scss";

const Product = ({ data }) => {
  const { img, title, price, check, favorite } = data;
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { loading } = useSelector((state) => state.products);

  const addToCartHandle = (data) => {
    const checkFindElement = cart.find((element) => element.id === data.id);
    if (checkFindElement) {
      dispatch(putProduct({ ...data, check: false }));
      dispatch(deleteProduct(data.id));
      return;
    } else {
      dispatch(addToCart(data));
      dispatch(putProduct({ ...data, check: true }));
    }
  };

  return (
    <div className="product">
      <div className={favorite ? "heart-block active" : "heart-block"}>
        {favorite ? (
          <span className="heart-icon">
            <FaHeart />
          </span>
        ) : (
          <span className="heart-icon">
            <FaRegHeart />
          </span>
        )}
      </div>
      <div className="product-img">
        <img src={img} alt={title} />
      </div>
      <div className="product-body">
        <p className="product-desc">{title}</p>
        <div className="product-footer">
          <div className="product-price">
            <h5>Цена:</h5>
            <h2>{price} руб.</h2>
          </div>
          <button
            className={check ? "product-add active" : "product-add"}
            onClick={() => addToCartHandle(data)}
          >
            {loading === "pending_cart" ? (
              <AiOutlineLoading className="icon-check" />
            ) : check ? (
              <FaCheck className="icon-check" />
            ) : (
              <FaPlus className="icon-plus" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
