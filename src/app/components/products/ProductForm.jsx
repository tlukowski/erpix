import React from "react";
import { ConfiguratorForm } from "../forms/ConfiguratorForm";

export const ProductForm = () => {
  return (
    <div className="relative bg-primary md:mt-12">
      <div className=" px-4  pt-8 pb-12 sm:px-6 lg:px-8 lg:py-24 mx-auto flex flex-col items-center">
        <div className="mx-auto">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl lg:text-4xl text-center font-bold text-gray-800">
              Wypełnij formularz
            </h3>           
          </div>
        </div>
        <ConfiguratorForm />
      </div>
    </div>
  );
};

export default ProductForm;
