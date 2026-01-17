import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 bg-black">
       <section className="relative overflow-hidden min-h-[100vh] py-8 sm:py-24 md:py-16">
           <div className="text-center flex flex-col items-center gap-6 ">
        
        {/* Badge */}
        <div className="inline-block mb-4 w-full sm:w-auto">
                <div className="relative flex items-center rounded-full bg-white border border-[#2c2c2c] 
                 px-4 py-3 overflow-hidden sm:gap-5 sm:px-8 sm:py-4 sm:overflow-visible md:px-10 md:py-5" >
                  <Image
                  src="/2_Logo_Bulle.png"
                   alt="loupe"
                  width={48}
                  height={48}
                  className="sm:h-12 sm:w-12 md:h-14 md:w-15"/>
                  <p className="font-extrabold text-[#2c2c2c] overflo-hidden whitespace-nowrap
                  sm:text-lg sm:overflow-visible sm:whitespace-nowrap md:text-xl lg:text-2xl xl:text-3xl uppercase">
                    Créer un site web vraiment unique</p>
                 
                 </div>
        </div>
        {/* Titre */}
        <h1 className="max-w-5xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl" >
          Votre <span className="text-[#71DDAE]">site</span> doit{" "}
           <span className="text-[#71DDAE]">donner envie</span>de{" "} <br />
           <span className="text-[#71DDAE]">rester</span>, pas de{" "}
           <span className="line-through decoration-[#1c1c1c] ">
           <span className="text-[#71DDAE]">revenir</span>{" "}
            <span className="text-white">en</span>{" "}<br />
             <span className="text-[#71DDAE]">arrière</span></span>.
        </h1>

        {/* Sous-titre */}
        <p className="max-w-lg text-white/80 text-base sm:max-w-2xl sm:text-lg md:text-xl">
          Design modern, SEO solide, Suivi complet: <br />
          on construit un site retient vos visiteurs et vous apporte des résultats.
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
