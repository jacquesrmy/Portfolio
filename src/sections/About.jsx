import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
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
        <AnimatedTextLines text={aboutText} className={"w-full space-y-4"} />
      </div>
    </section>
  );
};

export default About;
