import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import ReactLenis from "lenis/react";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";

const checkHardwareAcceleration = () => {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return false;

    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      if (/swiftshader|software/i.test(renderer)) {
        return false;
      }
    }
    return true;
  } catch (e) {
    return false;
  }
};

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);
  const [hwAcceleration, setHwAcceleration] = useState(true);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Vérifier hardware acceleration une seule fois au montage
    const hw = checkHardwareAcceleration();
    setHwAcceleration(hw);
    setChecked(true);
  }, []);

  useEffect(() => {
    if (progress === 100 && hwAcceleration) {
      setIsReady(true);
    }
  }, [progress, hwAcceleration]);

  // Tant que le check n’est pas fait → rien
  if (!checked) return null;

  // Cas 1 : Accélération désactivée → écran d’erreur permanent (pas de site)
  if (!hwAcceleration) {
    return (
      <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white font-light">
        <p className="mb-4 text-xl tracking-widest text-red-400">
          ⚠️ Accélération matérielle requise
        </p>
        <p className="text-center max-w-md mb-6 text-sm text-white/70">
          Ce site nécessite l'accélération matérielle pour fonctionner correctement.  
          Veuillez l'activer dans les paramètres de votre navigateur, ou changer de navigateur, puis rechargez la page.
        <br />
        <br />
        <em>Par exemple, vous pouvez consulter ce lien pour Opera et Chrome: 
        <br />
          chrome://settings/?search=Syst%C3%A8me </em>
        </p>
        <div className="relative h-1 overflow-hidden rounded w-60 bg-white/10">
          <div className="absolute top-0 left-0 h-full bg-red-500 w-full"></div>
        </div>
      </div>
    );
  }

  // Cas 2 : Accélération activée → loader puis site
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {/* Loader */}
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white font-light transition-opacity duration-700">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Site */}
      {isReady && (
        <div className="opacity-100 transition-opacity duration-1000">
          <Navbar />
          <Hero />
          <ServiceSummary />
          <Services />
          <About />
          <Works />
          <ContactSummary />
          <Contact />
        </div>
      )}
    </ReactLenis>
  );
};

export default App;
