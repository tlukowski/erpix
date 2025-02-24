import { createContext, useContext, useState } from "react";

const ProductSelectionContext = createContext();

export const ProductSelectionProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const toggleProductSelection = (productId, isChecked) => {
    setSelectedProducts((prevSelected) =>
      isChecked ? [...prevSelected, productId] : prevSelected.filter(id => id !== productId)
    );
  };

  return (
    <ProductSelectionContext.Provider value={{ selectedProducts, toggleProductSelection }}>
      {children}
    </ProductSelectionContext.Provider>
  );
};

export const useProductSelection = () => {
  return useContext(ProductSelectionContext);
};
