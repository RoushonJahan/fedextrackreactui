import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProductCard({ product }) {
  return (
<div className="bg-white shadow-md rounded-md p-4 flex items-center justify-between gap-4">
  <img src={product.image} width="35px" className="flex-shrink-0" />
  <div className="flex-1">
    <h2 className="text-lg font-semibold">{product.title}</h2>
    <h2 className="text-sm font-semibold">{product.description}</h2>
  </div>
  <p className="font-semibold">{product.price} Taka</p>
  <Link
    to={`/track/${product.trackingNumber}`}
    className="text-sm bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-md"
  >
    Track order
  </Link>
</div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    trackingNumber: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
