/*
Qué hace
Coloca 6 luces de colores alrededor del cuarto 3D para darle un ambiente nocturno, entre azul y morado, como un cuarto de gamer con una lámpara encendida.
Analogía: el equipo de iluminación de un set de cine. Cada luz tiene una posición, un color y una fuerza, y entre todas crean el “look” de la escena.
Sin luces, un modelo 3D se ve completamente negro. Por eso esta pieza es clave. La luz ambiental que viste en HeroExperience (
#1a1a40, intensidad 0.2) es solo la base tenue.
*/
import * as THREE from "three"; //Importar a Three.js

const HeroLights = () => (
    <>
            {/* lamp's light */}
            <spotLight //Es como una lampara de escenario: ilumina dentro un cono
                position={[2, 5, 6]}
                angle={0.15}
                penumbra={0.2}
                intensity={100}
                color="white"
            />
            <spotLight
                position={[4, 5, 4]}
                angle={0.3}
                penumbra={0.5}
                intensity={40}
                color="#4cc9f0"
            />

            <spotLight
                position={[-3, 5, 5]}
                angle={0.4}
                penumbra={1}
                intensity={60}
                color="#9d4edd"
            />
            {/* Luz del panel */}
            <primitive
                object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
                position={[1, 3, 4]}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
                intensity={15}
            />
            {/*Luces de atmosfera*/}
            <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
            <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
    </>
);

export default HeroLights;
