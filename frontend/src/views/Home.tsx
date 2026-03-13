import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MusicCard from "../components/MusicCard";

export default function Home() {
  return (
    <div className="flex bg-neutral-950 min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-8">
          <h2 className="text-2xl text-purple-300 mb-6">Recomendado para ti</h2>

          <div className="grid grid-cols-5 gap-6">
            <MusicCard />
          </div>
        </main>
      </div>
    </div>
  );
}
