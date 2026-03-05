import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AuthLayout() {
  const location = useLocation();
  const isRegister = location.pathname === "/register";

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="w-screen h-screen flex overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-700">
      {/* BOTÓN MODO OSCURO */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="
          absolute top-6 right-6 z-50
          px-4 py-1 rounded-lg text-sm
          bg-purple-200 dark:bg-neutral-800
          text-purple-800 dark:text-purple-300
          backdrop-blur
          transition
        "
      >
        {darkMode ? "Clasista" : "Nigger"}
      </button>

      {/* VIDEO */}
      <div
        className={`
          w-1/2 h-full relative transition-transform duration-700 ease-in-out
          ${isRegister ? "translate-x-full" : "translate-x-0"}
        `}
      >
        <video
          src="\videos\red-eyes-anime-girl-1-moewalls-com.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Glow ambiental */}
        <div className="absolute inset-0 bg-purple-600/20 blur-3xl animate-pulse" />

        {/* Degradado */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/40 to-fuchsia-900/40" />

        {/* Noise */}
        <div className="absolute inset-0 bg-noise" />
      </div>

      {/* FORMULARIO */}
      <div
        className={`
          w-1/2 h-full flex items-center justify-center
          transition-transform duration-700 ease-in-out
          ${isRegister ? "-translate-x-full" : "translate-x-0"}
        `}
      >
        <Outlet />
      </div>
    </div>
  );
}
