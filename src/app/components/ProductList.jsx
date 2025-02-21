"use client";
import React from "react";
import Image from "next/image";
export const ProductList = ({ products }) => {
  return (
    <section className="relative bg-gray-100 py-12 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        
          {products && products.length > 0 ? (
            products.map(
              (product) =>
                product.visibility === "both" && (
                  <article
                    className="bg-white flex flex-col items-center border p-4"
                    key={product.id}
                  >
                    <div>
                      <Image
                        width={224}
                        height={224}
                        src={`/api/image?imagePath=${product.image_url}`}
                        unoptimized={true}
                        alt={product.name}
                      />
                    </div>
                    {product.features.map((feature, index) => (
                      <div key={index}>{feature.id} {feature.id_feature_value}</div>
                    ))} 
                    <h3 className="mt-4 font-bold text-center line-clamp-2 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex mb-2 w-full px-2 justify-center">
                      <input
                        type="checkbox"
                        className="shrink-0 mt-0.5 w-5 h-5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        id={`hs-default-checkbox-${product.id}`}
                      />
                      <label
                        htmlFor={`hs-default-checkbox-${product.id}`}
                        className="text-gray-500 ms-3 uppercase"
                      >
                        Wybierz produkt
                      </label>
                    </div>
                    <div className="mt-auto">{product.price.toFixed(2)} zł</div>                    
                  </article>
                )
            )
          ) : (
            <p>Brak produktów do wyświetlenia.</p>
          )}
        </div>
      </div>
    </section>
  );
};
