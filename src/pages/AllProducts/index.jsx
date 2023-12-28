import React from "react";
import { Link } from "react-router-dom";
import s from "./allproducts.module.css";
import ProductsContainer from "../../components/ProductsContainer";

export const AllProducts = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.buttons}>
          <Link to="/">
            <button className={s.btn1}>Main Page</button>
          </Link>
          <div className={s.line} />
          <button className={s.btn2}>All products</button>
        </div>
        <h1>All products</h1>
      </div>
      <ProductsContainer showDiscountedOnly={false} />
    </>
  );
};

export default AllProducts;
