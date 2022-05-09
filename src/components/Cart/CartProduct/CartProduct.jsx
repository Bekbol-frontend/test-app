import React from "react";
import { FaTimes } from "react-icons/fa";
import { deleteProduct } from "../../../store/cart";
import { putProduct } from "../../../store/products";
import { useDispatch } from "react-redux";
import "./cartProduct.scss";

const CartProduct = ({ data }) => {
  const dispatch = useDispatch();

  const clickBtn = (data) => {
    dispatch(deleteProduct(data.id));
    dispatch(putProduct(data));
  };

  return (
    <div className="cart-product">
      <div className="cart-product__img">
        <img src={data.img} alt={data.title} />
      </div>
      <div className="cart-product__body">
        <p className="cart-desc">{data.title}</p>
        <h3>{data.price} руб.</h3>
      </div>
      <button className="cart-product__btn" onClick={() => clickBtn(data)}>
        <FaTimes />
      </button>
    </div>
  );
};

export default CartProduct;
