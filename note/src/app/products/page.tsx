import Link from "next/link";
import React from "react";

const PRODUCTS = [
  { id: 1, name: "shirt" },
  { id: 2, name: "pants" },
  { id: 3, name: "skirt" },
  { id: 4, name: "shoes" },
] as const;

const ProductsPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.name}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
