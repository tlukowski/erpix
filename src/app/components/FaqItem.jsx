import React from "react";

export const FaqItem = ({ id, title, description }) => {
  return (
    <div
      className={`hs-accordion hs-accordion-active:bg-primary bg-gray-100 rounded-xl p-6 ${
        id === 1 ? "active" : ""
      }`}
      id={`hs-basic-with-title-and-arrow-stretched-heading-${id}`}
    >
      <button
        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition  focus:outline-none "
        aria-expanded={`${
          id === 1 ? "true" : "false"
        }`}
        aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${id}`}
      >
        {title}
        <svg
          className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 "
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        <svg
          className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      <div
        id={`hs-basic-with-title-and-arrow-stretched-collapse-${id}`}
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-3006 ${
          id === 1 ? "" : "hidden"
        }`}
        role="region"
        aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${id}`}
      >
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
};
