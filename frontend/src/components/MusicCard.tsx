export default function MusicCard() {
  return (
    <div
      className="
      bg-neutral-900
      rounded-xl
      p-4
      hover:bg-neutral-800
      transition
      cursor-pointer
      group
      "
    >
      <img src="/imagenes/nigth.gif" className="rounded-lg mb-3" />

      <h3 className="text-white font-semibold">Ladridos de Perro</h3>

      <p className="text-gray-400 text-sm">Therian Artist</p>
    </div>
  );
}
