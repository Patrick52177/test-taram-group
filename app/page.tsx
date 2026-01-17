import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";

export default function Home() {
  return (
      <main className="flex-1 bg-[#0b0f0e]" >
      <section className="relative overflow-hidden min-h-[100vh] 
                        py-24 sm:py-24 md:py-24">

          {/* Badge / Bulle */}
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="mb-4 inline-block w-full sm:w-auto">
              <div className="flex items-center bg-[#FFFFFF] border border-[#1C1C1C]/20 rounded-full  
                px-4 py-3 sm:gap-5 sm:px-8 sm:py-4 sm:overflow-visible md:px-10 md:py-5">
                <Image
                  src="/2_Logo_Bulle.png"
                  alt="Web Difference loupe"
                  width={48}
                  height={48}
                  className="sm:h-12 sm:w-12 md:h-14 md:w-14"
                />
                <p className="font-extrabold text-[#1C1C1C] 
                  sm:text-lg sm:overflow-visible sm:whitespace-nowrap md:text-xl lg:text-2xl xl:text-3xl uppercase">
                  Créer un site web{" "}
                  <span className="underline decoration-3 underline-offset-4">
                    vraiment
                  </span>{" "}
                  unique
                </p>
              </div>
            </div>

            {/* Titre principal */}
            <h1 className="max-w-5xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Votre <span className="text-[#71DDAE]">site</span> doit{" "}
              <span className="text-[#71DDAE]">donner envie</span> de{" "} <br />
              <span className="text-[#71DDAE]">rester</span>, pas de{" "}
              <span className="line-through decoration-[#1c1c1c]" >
                <span className="text-[#71DDAE]">revenir</span>{" "}
                <span className="text-white">en</span>{" "} <br />
                <span className="text-[#71DDAE]">arrière</span>
              </span>
              .
            </h1>

            {/* Sous-titre */}
            <p className="max-w-lg font-medium text-white/80 sm:max-w-2xl sm:text-lg md:text-xl">
              Design moderne,<br className="sm:hidden" /> SEO solide, Suivi complet :<br />
              on construit un site qui retient vos visiteurs et vous apporte des résultats.
            </p>

            {/* Boutons */}
            <div className="mt-8 flex items-center gap-4 sm:flex-row sm:items-start">

              {/* Bouton principal */}
              <div className="relative w-full sm:w-auto sm:inline-flex">
                <a
                  href="https://calendly.com/webdifference/nouvelle-reunion?hide_gdpr_banner=1&background_color=282828&text_color=ffffff&primary_color=71ddae&month=2025-12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center gap-3 rounded-xl 
                    bg-gradient-to-r from-[#71DDAE] to-[#2A9D7A]  text-lg font-extrabold tracking-wide 
                    text-[#1C1C1C] shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 
                    h-12 whitespace-nowrap sm:w-auto sm:px-8 sm:py-4 sm:text-xl md:px-8 md:py-4 md:text-2xl md:h-[68px]"
                >
                   <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                       xmlns="http://www.w3.org/2000/svg"
      
                    >
                       <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 
                             6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0
                              6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6
                              5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16
                             7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 
                             7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                  Prendre RDV
                </a>

                {/* Image décorative */}
                <div className="absolute top-full -left-12 -mt-4 ">
                  <Image
                    src="/3_Un_Ptit_Click.png"
                    alt="Un ptit click ?"
                    width={200}
                    height={150}
                    className="w-auto h-auto max-w-[200px]"
                  />
                </div>
              </div>

              {/* Bouton secondaire */}
              <a
                href="#portfolio"
                className="inline-flex w-full items-center gap-3 rounded-xl border border-[#71DDAE] 
                  bg-[#1C1C1C]/50 text-base font-extrabold tracking-wide text-[#71DDAE] 
                  transition-all duration-200 hover:bg-[#1C1C1C]/70 h-12 sm:w-auto sm:px-8 sm:py-4 sm:text-lg md:h-[68px]"
              >
                Découvrir nos projets
                <FiArrowDown className="text-xl" color="#71DDAE" />
              </a>
            </div>
          </div>

   
      </section>

      
    </main>
  );
}