import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product/Product";
import "./products.scss"

const Products = () => {
  const { products, loading } = useSelector((state) => state.products);

  return (
    <div className="products-block">
      {loading === "pending" && <h1>Loading...</h1>}
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
