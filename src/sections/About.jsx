import { useRef, useState } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const About = () => {
  const [cvOpen, setCvOpen] = useState(false);

  const text = `Étudiant en 3ᵉ année à l'ESGI
    spécialisé en systèmes, réseaux et cloud.
    Curieux, rigoureux et motivé à apprendre.`;
  const aboutText = `Je recherche une alternance en systèmes, réseaux et cloud
  (3 semaines en entreprise / 1 semaine à l’école).
  Mon objectif : contribuer à la mise en place, au maintien et à l’évolution d’infrastructures informatiques modernes, tout en renforçant la fiabilité, la sécurité et l’automatisation des environnements numériques.
  En dehors de mes projets techniques :
  - Je m'investis dans le scoutisme (organisation et esprit d'équipe)
  - Je pratique le théâtre (communication et créativité)
  - Je découvre de nouvelles cuisines et cultures
  - Je perfectionne mes langues (anglais, espagnol, russe)`;

  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, Built to scale"}
        title={"À propos"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpg"
          alt="man"
          className="w-md rounded-3xl"
        />

        <div className="flex flex-col gap-8 w-full">
          <AnimatedTextLines text={aboutText} className={"w-full space-y-4"} />

          {/* BOUTON OUVERTURE CV */}
          <button
            onClick={() => setCvOpen(true)}
            className="self-start px-6 py-3 text-lg font-medium text-white border border-white/40 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            Voir mon CV
          </button>
        </div>
      </div>

      {/* MODAL CV */}
      <AnimatePresence>
        {cvOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-4/10 h-6/7 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-black flex items-center justify-center"
            >
              {/* Boutons en haut */}
              <div className="absolute top-4 right-4 flex gap-3">
                {/* Télécharger */}
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black rounded-xl hover:bg-white hover:text-black border border-black transition-all cursor-pointer"
                >
                  <Icon icon="lucide:download" className="w-4 h-4" />
                  Télécharger
                </a>
                {/* Fermer */}
                <button
                  onClick={() => setCvOpen(false)}
                  className="p-2 bg-black text-white rounded-full hover:bg-white hover:text-black border border-black transition-all cursor-pointer"
                >
                  <Icon icon="lucide:x" className="w-5 h-5" />
                </button>
              </div>

              {/* Affichage du CV en image */}
              <img
                src="/cv.jpg"
                alt="Mon CV"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
