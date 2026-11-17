//Es el escenario 3D del Hero: monta un lienzo, una cámara, luces, controles para girar con el mouse y un cuarto 3D con partículas flotando. Es el cubo azul que hicimos al principio, pero ya completo.
//-----------------------------------------------------------------
import { OrbitControls } from "@react-three/drei";//Controles de camara listos
import { Canvas } from "@react-three/fiber"; //El lienzao 3D
import { useMediaQuery } from "react-responsive"; //Detecta el tamaño de pantalla
import { Room } from "./Room"; //El cuarto 3D
import HeroLights from "./HeroLights"; //Luces que apuntan al cuarto
import Particles from "./Particles"; //Particulas de luz cayendo
import { Suspense } from "react"; // Espera mientras carga el modelo

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });//Saber en qué dispositivo estamos
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}> {/*Crea la escena 3D y todo lo que va dentro son objetos 3D, no HTML*/}
                        {/*Posición: x, y, z mirando hacia el origen. */}
            <ambientLight intensity={0.2} color="#1a1a40" />{/* Luz de ambiente azul */}

            {/*Girar camara con el mouse*/}
            <OrbitControls
                enablePan={false} // Mover la escena de lado (clic derecho)
                enableZoom={false} // Acercar alejar (zoom in zoom out). Si es tablet desactiva esta opción para que no interfiera con el scroll
                maxDistance={20} // Limites de zoom
                minDistance={5}
                minPolarAngle={Math.PI / 5} // Cuánto puedes mirar desde arriba y desde abajo.
                maxPolarAngle={Math.PI / 2} //Los ángulo 3D se miden en radianes. Math.PI / 5 = 36°, Math.PI / 2 = 90°
            />

            <Suspense fallback={null}>
                <HeroLights />
                <Particles count={100} /> {/*Cuántas particulas*/}
                <group //Es la caja invisible que alberga a las luces cayendo
                    scale={isMobile ? 0.7 : 1} //Si es telefono hazla más pequeña
                    position={[0, -3.5, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                >
                    <Room />
                </group>
            </Suspense>
        </Canvas>
    );
};

export default HeroExperience;
