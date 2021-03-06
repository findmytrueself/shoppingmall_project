import { useQuery } from "react-query";
import { fetcher, QueryKeys } from "../../queryClient";
import ProductItem from "../../components/productItem";
import { Product } from "../../types";
const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );
  console.log(data);
  return (
    <div>
      <h2>상품목록</h2>
      <ul className="products">
        {data?.map((product: Product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
