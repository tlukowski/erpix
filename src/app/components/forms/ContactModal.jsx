"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useModal } from "../../context/ModalContext";

const ContactModal = () => {
  const { isModalOpen, closeModal } = useModal(); // Pobieramy wartości z kontekstu

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Nieprawidłowy email").required("Email jest wymagany"),
      phone: Yup.string().matches(/^\d{9}$/, "Nieprawidłowy numer telefonu").required("Telefon jest wymagany"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted", values);
      resetForm();
      closeModal(); 
    },
  });

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Zostaw swoje dane</h2>
        <form onSubmit={formik.handleSubmit}>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="py-3 px-4 block w-full border-gray-200 bg-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 mb-1"
            placeholder="Podaj swój email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && <p className="text-red-500 text-xs">{formik.errors.email}</p>}

          <label className="block mb-2 text-sm font-medium mt-4">Telefon</label>
          <input
            type="tel"
            name="phone"
            className="py-3 px-4 block w-full border-gray-200 bg-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 mb-1"
            placeholder="Podaj swój numer telefonu"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && <p className="text-red-500 text-xs">{formik.errors.phone}</p>}

          <div className="flex justify-end mt-4">
            <button 
              type="button"
              className="bg-secondary hover:bg-black transition-colors text-white px-4 py-2 rounded mr-2"
              onClick={closeModal}
            >
              Zamknij
            </button>
            <button type="submit" className="bg-primary hover:bg-yellow-300 transition-colors text-secondary  px-4 py-2 rounded">
              Wyślij
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
