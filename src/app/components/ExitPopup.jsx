"use client";

import { useEffect, useState } from "react";
import { useModal } from "../context/ModalContext";
const ExitPopup = () => {
  const { openModal } = useModal();
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hasTriggered) return;

    const handleMouseOut = (event) => {
      if (event.relatedTarget === null) {
        setIsVisible(true);
        setHasTriggered(true);
        removeListeners();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setIsVisible(true);
        setHasTriggered(true);
        removeListeners();
      }
    };

    const enableListeners = () => {
      document.addEventListener("mouseout", handleMouseOut);
      document.addEventListener("visibilitychange", handleVisibilityChange);
    };

    const removeListeners = () => {
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("mousemove", enableListeners);
    };

    window.addEventListener("mousemove", enableListeners, { once: true });

    return removeListeners;
  }, [hasTriggered]);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 w-full  flex justify-center items-center z-10">
      <div className="bg-gray-100 shadow-2xl w-full max-w-full p-6 rounded-lg text-center">
        <div>
          <h2 className="text-xl font-bold">Potrzebuje pomocy z wyborem?</h2>
          <p className="mt-2">Zadzwoń lub zostaw kontakt!</p>
          <button
            onClick={openModal}
            className="mt-4 bg-secondary hover:bg-black transition-colors text-white px-4 py-2 rounded mr-2"
          >
            Zostaw kontakt
          </button>
          <button
          className="mt-4 bg-blue-500 transition-colors text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={closePopup}
        >
          Zamknij
        </button>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;
