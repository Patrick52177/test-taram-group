import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 bg-black">
       <section className="relative overflow-hidden min-h-[100vh] flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        
        {/* Badge */}
        <span className="inline-block rounded-full bg-blue-100 text-blue-600 px-4 py-1 text-sm font-medium">
          🚀 Nouveau projet
        </span>

        {/* Titre */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Construisez des applications modernes avec Next.js
        </h1>

        {/* Sous-titre */}
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
          Next.js et Tailwind CSS vous permettent de créer des interfaces rapides,
          responsives et élégantes en un minimum de temps.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Commencer
          </button>

          <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
    </main>
  );
}
