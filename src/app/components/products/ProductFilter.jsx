"use client";
import {React, useRef, useEffect, useState} from "react";
import { motion, useInView } from "motion/react"
import { containerVariants } from "../../helpers/framerMotionAnimations";
import FilterPanel from "./FilterPanel";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import {ProductSelectionProvider} from "./ProductSelectionContext";
export const ProductFilter = ({ products, filters }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleFilterChange = (category, id_feature_value) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      const categoryFilters = { ...newFilters[category] } || {};

      if (categoryFilters[id_feature_value]) {
        delete categoryFilters[id_feature_value]; 
      } else {
        categoryFilters[id_feature_value] = true; 
      }

      if (Object.keys(categoryFilters).length === 0) {
        delete newFilters[category];
      } else {
        newFilters[category] = categoryFilters;
      }

      return newFilters;
    });
  };

  const filterProducts = (product) => {
    if (Object.keys(selectedFilters).length === 0) return true;

    return Object.entries(selectedFilters).every(([category, selectedValues]) =>
      product.features.some(
        (feature) =>
          filters[category]?.some((f) => f.id_feature_value === feature.id_feature_value) &&
          selectedValues[feature.id_feature_value] 
      )
    );
  };

  const filteredProducts = products.filter(filterProducts);

  return (
    <ProductSelectionProvider>
    <motion.section className="relative bg-gray-200 mt-6 lg:mt-24" ref={ref}
            variants={containerVariants}
            animate={isInView ? "visible" : "hidden"}
            initial="hidden">
      <div className="container mx-auto py-6 md:py-12 lg:py-20">
      <h2 className="text-xl md:text-2xl lg:text-4xl mb-6 md:mb-8 lg:mb-16 text-center font-bold">Skonfiguruj produkt</h2>
      <FilterPanel filters={filters} selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
      <ProductList products={filteredProducts} />
      </div>
    </motion.section>
    <section>
      <ProductForm/>
    </section>
    </ProductSelectionProvider>
  );
};
