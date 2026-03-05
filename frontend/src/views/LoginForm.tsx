import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="p-[2px] rounded-3xl bg-gradient-to-br from-purple-400 via-fuchsia-500 to-purple-700">
      <div
        className="
          w-[400px] p-8 rounded-3xl
          bg-white/60 dark:bg-black/80
          backdrop-blur-2xl
          shadow-[0_0_60px_rgba(168,85,247,0.5)]
          transition-all duration-500
        "
      >
        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <img
            src="\imagenes\therian.jpeg"
            alt="Logo"
            className="w-20 h-20 object-contain
              drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
          />
        </div>

        {/* TEXTO */}
        <h1 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-300">
          Bienvenido
        </h1>

        <p className="text-center text-purple-500 dark:text-purple-400 mt-2 mb-8">
          puto el que lo lea
        </p>

        {/* FORMULARIO */}
        <form className="space-y-5">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="input-glass"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="input-glass"
          />

          <button type="submit" className="btn-glow">
            Entrar
          </button>
        </form>

        {/* LINK A REGISTRO */}
        <p className="mt-6 text-center text-sm text-purple-600 dark:text-purple-400">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="font-semibold hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
