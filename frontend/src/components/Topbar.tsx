export default function Topbar() {
  return (
    <header
      className="
      h-16
      flex
      items-center
      justify-between
      px-8
      bg-neutral-900/70
      backdrop-blur
      border-b border-purple-800/30
      "
    >
      <h2 className="text-lg text-purple-300 font-semibold">Inicio</h2>

      <div className="flex items-center gap-4">
        <button
          className="
          px-4 py-1
          bg-purple-600
          rounded-lg
          hover:bg-purple-700
          transition
          "
        >
          Perfil
        </button>
      </div>
    </header>
  );
}
