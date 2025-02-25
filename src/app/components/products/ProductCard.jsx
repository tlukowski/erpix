import Image from "next/image";
import { useProductSelection } from "./ProductSelectionContext";

const ProductCard = ({ product }) => {
  const { toggleProductSelection } = useProductSelection();
  const handleCheckboxChange = (event) => {
    toggleProductSelection(product.name, event.target.checked);
  };
  return (
    <article className="bg-white flex flex-col items-center border p-4">
      <div>
        <a href={product.url} target="_blank" rel="noopener noreferrer">
        <Image
          width={224}
          height={224}
          src={`/api/image?imagePath=${product.image_url}`}
          unoptimized={true}
          alt={product.name}
        />
        </a>
      </div>
      <h3 className="mt-4 font-bold text-center line-clamp-2 mb-2">
        <a target="_blank" href={product.url} rel="noopener noreferrer">{product.name}</a>
      </h3>
      <div className="flex mb-2 w-full px-2 justify-center">
        <input
          type="checkbox"
          className="shrink-0 mt-0.5 w-5 h-5 border-gray-200 cursor-pointer rounded accent-black text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          id={`product-${product.id}`}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={`product-${product.id}`} className="text-gray-500 ms-3 uppercase cursor-pointer">
          Wybierz produkt
        </label>
      </div>
      <div className="mt-auto">{product.price.toFixed(2)} zł</div>
    </article>
  );
};

export default ProductCard;
