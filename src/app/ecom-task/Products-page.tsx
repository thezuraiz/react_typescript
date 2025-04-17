import { useNavigate, useSearchParams } from "react-router-dom";
import data from "../ecom/data.json";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      {data.map((e) => (
        <span
          className="text-center border box-border border-gray-200 rounded-md p-2"
          key={e.id}
          onClick={() => {
            navigate(`/product/${e.id}?q=${query}`, {
              state: { ...e, product: e },
            });
          }}
        >
          <h3>Title: {e.name}</h3>
          <p>Category: {e.type}</p>
          <p>Price: {e.price}</p>
        </span>
      ))}
    </div>
  );
};

export default ProductsPage;
