import { useEffect } from "react";
import { FaAngleRight, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleVisible } from "../../store/cart";
import CartProduct from "./CartProduct/CartProduct";
import "./cart.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const { visible, cart } = useSelector((state) => state.cart);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [visible]);

  return (
    <div
      className={visible ? "cart-block active" : "cart-block"}
      onClick={() => dispatch(handleVisible())}
    >
      <div
        className={visible ? "cart-block__inner active" : "cart-block__inner"}
        onClick={(event) => event.stopPropagation()}
      >
        <span className="ext" onClick={() => dispatch(handleVisible())}>
          <FaTimes />
        </span>
        <div className="cart-block-top">
          <h1 className="cart-title">Корзина</h1>
        </div>
        <div className="cart-inf">
          <div className="cart-products">
            {cart.map((product) => (
              <CartProduct key={product.id} data={product} />
            ))}
          </div>
          <div className="cart-bottom">
            <div className="cart-all-price">
              <h2>
                Итого: ..... <span>21 498</span>руб.
              </h2>
            </div>
            <div className="cart-nalog">
              <h2>
                Налог 5%: ..... <span>1074</span>руб.
              </h2>
            </div>
            <button className="cart-btn">
              Оформить заказ
              <span className="cart-btn-icon">
                <FaAngleRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
