"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductFilter({ categoryId }) {
  const [products, setProducts] = useState([]); // Lista produktów
  const [filters, setFilters] = useState({}); // Lista dostępnych filtrów
  const [selectedFilters, setSelectedFilters] = useState({}); // Wybrane filtry

  // 1️⃣ Pobierz produkty i filtry po załadowaniu komponentu
  useEffect(() => {
    async function fetchData() {
      try {
        const [productsRes, filtersRes] = await Promise.all([
          fetch(`/api/products?category=${categoryId}`).then((res) =>
            res.json()
          ),
          fetch(`/api/features?category=${categoryId}`).then((res) =>
            res.json()
          ),
        ]);

        setProducts(productsRes.products || []);
        setFilters(filtersRes || {});
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    }
    fetchData();
  }, [categoryId]);

  // 2️⃣ Obsługa zmian w filtrach
  function handleFilterChange(feature, value) {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      if (!newFilters[feature]) newFilters[feature] = new Set();

      if (newFilters[feature].has(value)) {
        newFilters[feature].delete(value); // Usuń filtr jeśli już jest zaznaczony
      } else {
        newFilters[feature].add(value); // Dodaj filtr
      }

      if (newFilters[feature].size === 0) delete newFilters[feature]; // Usuń pusty filtr
      return { ...newFilters };
    });
  }

  // 3️⃣ Filtruj produkty na podstawie wybranych filtrów
  const filteredProducts = products.filter((product) => {
    return Object.entries(selectedFilters).every(([feature, values]) => {
      return product.features?.some(
        ({ id, id_feature_value }) =>
          filters[feature] && filters[feature].includes(id_feature_value)
      );
    });
  });

  return (
    <div className="container mx-auto p-6">
      {/* 🔥 Sekcja filtrów */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Filtry</h2>
        {Object.entries(filters).map(([feature, values]) => (
          <div key={feature} className="mb-3">
            <h3 className="font-medium">{feature}</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((value) => (
                <label key={value} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedFilters[feature]?.has(value) || false}
                    onChange={() => handleFilterChange(feature, value)}
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 Sekcja produktów */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
              {/* {product.features.map((feature, index) => (
                <div key={index}>
                  {feature.id} {feature.id_feature_value}
                </div>
              ))} */}
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
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3">
            Brak produktów spełniających kryteria filtrów.
          </p>
        )}
      </div>
    </div>
  );
}
