import {useState} from "react";
import ProductCard from "./ProductCard.jsx";

const ProductList = ({ products }) => {
  
  return (
    <section className="relative mt-6 lg:mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.length > 0 &&
            products.map((product) => <ProductCard key={product.id} product={product} />)
          }          
        </div>
          {products.length === 0 && <p>Brak produktów do wyświetlenia.</p>}
      </div>
    </section>
  );
};

export default ProductList;
