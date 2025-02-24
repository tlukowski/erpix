"use client";
import { motion, useInView } from "motion/react";
import {
  containerVariants,
  itemVariants,
} from "../../helpers/framerMotionAnimations";
import { React, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useProductSelection } from "../products/ProductSelectionContext";
const validationSchema = Yup.object({
  firstName: Yup.string().required("Imię jest wymagane"),
  lastName: Yup.string().required("Nazwisko jest wymagane"),
  email: Yup.string()
    .email("Nieprawidłowy email")
    .required("Email jest wymagany"),
  nip: Yup.string()
    .matches(/^\d{10}$/, "NIP musi składać się z 10 cyfr")
    .required("NIP jest wymagany"),
  product: Yup.string().required("Wybór produktu jest wymagany"),
  message: Yup.string().required("Wiadomość jest wymagana"),
});

export const ConfiguratorForm = () => {
  const { selectedProducts } = useProductSelection();
  const selectedProductsString =
    selectedProducts.length > 0 ? selectedProducts.join(", ") : "";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        nip: "",
        product: selectedProductsString,
        message: "",
      }}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={(values, { resetForm }) => {
        console.log("Formularz wysłany", values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <motion.div
          ref={ref}
          variants={containerVariants}
          animate={isInView ? "visible" : "hidden"}
          className="rounded-xl px-4 py-8 -ml-4 -mr-4 sm:mr-0 sm:ml-0 sm:p-6 lg:p-8 max-w-3xl mx-auto bg-white shadow-lg mt-8 w-full"
        >
          <motion.form variants={itemVariants} className="grid gap-4 lg:gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label className="block mb-2 text-sm  font-medium">
                  Imię <span className="text-red-500">*</span>
                </label>
                <Field
                  name="firstName"
                  className="py-3 px-4 block w-full border-gray-200 bg-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 mb-1"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm  font-medium">
                  Nazwisko <span className="text-red-500">*</span>
                </label>
                <Field
                  name="lastName"
                  className="py-3 px-4 block w-full border-gray-200 bg-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 mb-1"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label className="block mb-2 text-sm  font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  className="py-3 px-4 block w-full border-gray-200 bg-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 mb-1"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  NIP <span className="text-red-500">*</span>
                </label>
                <Field
                  name="nip"
                  className="py-3 px-4 block w-full border-gray-200 bg-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 mb-1"
                />
                <ErrorMessage
                  name="nip"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Wybrane produkty z konfiguratora{" "}
                <span className="text-red-500">*</span>
              </label>
              <Field
                name="product"
                value={selectedProductsString}
                readOnly
                className="py-3 px-4 block w-full border-gray-200 bg-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 mb-1"
              />
              <ErrorMessage
                name="product"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Wiadomość <span className="text-red-500">*</span>
              </label>
              <Field
                as="textarea"
                name="message"
                rows="4"
                className="py-3 px-4 block w-full border-gray-200 bg-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 mb-1"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-secondary"
            >
              Wyślij
            </button>
          </motion.form>
        </motion.div>
      )}
    </Formik>
  );
};
