import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    <div className="p-[2px] rounded-3xl bg-gradient-to-br from-purple-400 via-fuchsia-500 to-purple-700">
      <div className="w-[400px] p-8 rounded-3xl bg-white/60 dark:bg-black/80 backdrop-blur-2xl shadow-[0_0_60px_rgba(168,85,247,0.5)]">
        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <img
            src="\imagenes\therian.jpeg"
            alt="Logo"
            className="w-20 h-20 object-contain
              drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
          />
        </div>

        <h1 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-300 mb-2">
          Crear cuenta
        </h1>

        <p className="text-center text-purple-500 dark:text-purple-400 mb-8">
          vete a la vrga yaps
        </p>

        <form className="space-y-4">
          <input className="input-glass" placeholder="Usuario" />
          <input className="input-glass" placeholder="Correo electrónico" />
          <input
            className="input-glass"
            type="password"
            placeholder="Contraseña"
          />
          <input
            className="input-glass"
            type="password"
            placeholder="Confirmar contraseña"
          />

          <button className="btn-glow mt-2">Crear cuenta</button>
        </form>

        <p className="mt-6 text-center text-sm text-purple-600 dark:text-purple-400">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="font-semibold hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
