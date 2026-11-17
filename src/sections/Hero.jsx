import { useGSAP } from "@gsap/react"; // hook para usar GSAP dentro de React
import gsap from "gsap";               // la librería de animaciones en sí

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/Models/hero_models/HeroExperience";
const Hero = () => {
    useGSAP(() => {//Animación de entrada
        gsap.fromTo(
            ".hero-text h1",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
        );
    });
        //Animar los h1. Las tres lineas del título suben y aparecen una tras otra.
        /*
        Quieres...	                  Cambia
        Que suba desde más lejos	  y: 50 → y: 100
        Que venga desde un lado	      y: 50 → x: -80 (y y: 0 → x: 0)
        Más lento	duration:         1 → 2
        Más cascada	stagger:          0.2 → 0.5
        Otro estilo de movimiento	  ease: "bounce.out", "elastic.out", "power4.out"*/

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="" />
            </div>

            <div className="hero-layout">
                {/* LEFT: Hero Content */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Construyendo
                                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                        <span
                            key={index}
                            className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                        <img
                            src={word.imgPath}
                            alt="person"
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
                            </h1>
                            <h1>En Proyectos Reales</h1>
                            <h1>Que Entregan Resultados</h1>
                        </div>

                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hola, soy Kevin, desarrollador java junior Full-Stack formado en México con una pasión por el código.
                        </p>

                        <Button
                            text="Ve mi trabajo"
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="counter"
                        />
                    </div>
                </header>

                {/* RIGHT: 3D Model or Visual */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>

            {/*<AnimatedCounter />*/}
        </section>
    );
};

export default Hero;
