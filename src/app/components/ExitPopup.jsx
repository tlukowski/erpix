"use client";

import { useEffect, useState } from "react";

const ExitPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // Zapobiega problemom SSR

    const handleMouseLeave = (event) => {
      if (event.clientY <= 0) {
        setIsVisible(true);
      }
    };

    const enableListeners = () => {
      document.addEventListener("mouseleave", handleMouseLeave);
    };

    // W Next.js 15 eventy czasem działają dopiero po pierwszej interakcji użytkownika
    window.addEventListener("mousemove", enableListeners, { once: true });

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousemove", enableListeners);
    };
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold">Nie odchodź jeszcze!</h2>
        <p className="mt-2">Zarejestruj się teraz i odbierz 10% rabatu na pierwsze zamówienie!</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={closePopup}
        >
          Zamknij
        </button>
      </div>
    </div>
  );
};

export default ExitPopup;
