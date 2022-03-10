import { Product } from "../types";

const ProductDetail = ({
  item: {
    category,
    description,
    title,
    image,
    price,
    rating: { rate, count },
  },
}: {
  item: Product;
}) => {
  return (
    <div className="product-item">
      <p className="product-item_category">{category}</p>
      <p className="product-item_title">{title}</p>
      <img className="product-item_image" src={image} />
      <p className="product-item_description">{description}</p>
      <p className="product-item_price">${price}</p>
      <span className="product-item_rate">{rate}</span>
      <span className="product-item_count">{count}</span>
    </div>
  );
};

export default ProductDetail;
