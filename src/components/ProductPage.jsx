import "./ProductPage.css";
import React from "react";
import { useSelector } from "react-redux";

export const ProductPage = () => {
  const productData = useSelector((store) => store.product.productData);
  console.log("productData:", productData);
  return <div className="product-page"></div>;
};
