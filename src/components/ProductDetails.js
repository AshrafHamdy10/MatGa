import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [params.productId]);
  return (
    <>
      <div className="container">
        <div className="card mb-4 product-details">
          <img
            src={product.image}
            className="card-img-top img-details"
            alt={product.title}
          />
          <div className="card-body details-body">
            <h5 className="card-title d-title">{product.title}</h5>
            <p className="card-text d-text">{product.description}</p>
            <p>Price: {product.price} $</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
