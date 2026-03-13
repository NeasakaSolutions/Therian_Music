import { Home, Search, Library } from "lucide-react";

export default function Sidebar() {
  return (
    <aside
      className="
      w-64 h-screen
      bg-neutral-900
      text-white
      flex flex-col
      p-6
      border-r border-purple-800/30
      "
    >
      <h1 className="text-2xl font-bold text-purple-400 mb-10">
        Therian Music
      </h1>

      <nav className="space-y-6 text-gray-300">
        <div className="flex items-center gap-3 hover:text-purple-400 cursor-pointer">
          <Home size={20} />
          Inicio
        </div>

        <div className="flex items-center gap-3 hover:text-purple-400 cursor-pointer">
          <Search size={20} />
          Buscar
        </div>

        <div className="flex items-center gap-3 hover:text-purple-400 cursor-pointer">
          <Library size={20} />
          Biblioteca
        </div>
      </nav>
    </aside>
  );
}
