import { Product } from "../types";
import { Link } from "react-router-dom";
/*
  0: {id: 1, title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', price: 109.95, description: 'Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday', category: "men's clothing", …}
  */
const ProductItem = ({
  category,
  image,
  price,
  rating,
  title,
  id,
}: Product) => {
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item_category">{category}</p>
        <p className="product-item_title">{title}</p>
        <img className="product-item_image" src={image} />
        <p className="product-item_price">${price}</p>
        <span className="product-item_rate">{rating.rate}</span>
        <span className="product-item_count">{rating.count}</span>
      </Link>
    </li>
  );
};

export default ProductItem;
