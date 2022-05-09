import { useEffect } from "react";
import { Header, Cart } from "./components";
import { Home } from "./pages";
import { Routes, Route } from "react-router-dom";
import { getProducts } from "./store/products";
import { getCartProducts } from "./store/cart";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCartProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
