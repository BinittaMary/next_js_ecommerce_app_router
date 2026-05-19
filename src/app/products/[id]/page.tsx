import ProductAddButton from "@/app/components/ProductAddButton/ProductAddButton";
import styles from "../../page.module.css";
import Image from "next/image";
import React from "react";

function createRating(count: number, fill: string) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    if (fill === "star") {
      stars.push(
        <i key={"s" + i} className="fas fa-star text-warning"></i>
      );
    } else {
      stars.push(
        <i key={"e" + i} className="far fa-star text-warning"></i>
      );
    }
  }
  return stars;
}

export default function ProductDetail({ product }: any) {
  if (!product) {
    return <h1>Oops! Product not found</h1>;
  }

  const shade = Math.round(product.rating?.rate || 0);
  const unshade = 5 - shade;

  return (
    <div className="container">
      <div className="row mb-2">
        <div className="col-sm-4 col-md-4 col-lg-4">
          <Image
            src={product.image}
            alt="product image"
            className={`img-fluid rounded-3 my-5 pe-5 ${styles.productDtlImage}`}
            width={350}
            height={350}
            priority
          />
        </div>

        <div className="col-sm-8 col-md-8 col-lg-8">
          <hr className="py-3" />

          <h1 className="fw-bold text-capitalize" style={{ color: "#080d47" }}>
            {product.title}
          </h1>

          <h2 className="fw-bold text-capitalize" style={{ color: "#3b92a1" }}>
            {product.category}
          </h2>

          <h3 className="fw-bold text-capitalize">{product.brand}</h3>

          <h4 className="fw-bold text-danger">₹ {product.price}</h4>

          <div className="d-flex align-items-center">
            <span>
              {createRating(shade, "star")}
              {createRating(unshade, "empty-star")}
            </span>
          </div>

          <h6>{product.description}</h6>

          <div className="text-center">
            <ProductAddButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}