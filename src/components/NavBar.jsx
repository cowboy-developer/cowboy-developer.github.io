import { useState, useEffect } from "react"; //useState y useEffect son hooks: funciones especiales de React que empiezan con use. Dan a un componente memoria y la capacidad de reaccionar a cosas externas.
import { navLinks } from "../constants"; //navLinks es un arreglo en constants/index.js, igual que words. Cada elemento tiene forma { name: "Work", link: "#work" }.
                                        //"../constants" sin /index.js: al apuntar a una carpeta, Vite busca su index.js solo.

const NavBar = () => {
    // sigue si el usuario ha bajado la la página
    const [scrolled, setScrolled] = useState(false);
    // scrolled = ha bajado?, setScrolled = regisrta si bajó, useState() es una herramienta de React para que un componente recuerde algo.

    useEffect(() => {
        // crear un event listener para cuando se hace scroll
        const handleScroll = () => {
            // revisa si se ha hecho scroll down más de 10px
            const isScrolled = window.scrollY > 10; //window es la ventana del navegador y scrolly es la distancia que has bajado, en píxeles. Arriba del todo vale 0
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        // cuando la barra desaparezca de la página, dejamos de escuchar el scroll para no gastar memoria
        return () => window.removeEventListener("scroll", handleScroll);
        // regla de oro: lo que instalas en un efecto, lo desinstalas en su limpieza.
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">{/*Caja para el logo, enlaces del centro y el boton de contacto*/}
                <a href="#hero" className="logo">
                    Kevin Aldaba (huerco)
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (//Revisa la lista en constants
                            <li key={name} className="group">       {/* key={name} etiqueta única que React necesita para distinguir un <li> de otro. Es obligatoria en listas.
                                                                    className="group" permite que le subrayado funciona cuando pasas el mouse por este*/}
                                <a href={link}>
                                    <span>{name}</span>             {/* el texto visible, trabajos, experiencia*/}
                                    <span className="underline" />  {/* una raya vacía. Mide 0 de ancho y, al pasar el mouse, crece hasta el 100%. Eso crea el subrayado animado.*/}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contacto</span>
                    </div>
                </a>
            </div>
        </header>
    );
}

export default NavBar;
