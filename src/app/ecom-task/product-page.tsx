import { useLocation, useParams } from "react-router-dom";
import data from "../ecom/data.json";

const ProductPage = () => {
  const location = useLocation();
  const { id } = useParams();
  let product;
  const stateProduct = location.state?.product;
  console.log("Location: ", location, " stateProduct:", stateProduct);
  if (!stateProduct) {
    console.log("stateProduct nahi hai");
    product = data.find((e) => e.id === id);
  } else {
    console.log("stateProduct sy data la rha hun");
    product = stateProduct;
  }

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <section>
      <h3>Id: {product.id}</h3>
      <h3>Title: {product.name}</h3>
      <p>Price: {product.price}</p>
    </section>
  );
};

export default ProductPage;
