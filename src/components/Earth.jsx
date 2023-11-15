import { Canvas, useLoader } from '@react-three/fiber'
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { motion } from 'framer-motion-3d';
import img1 from '../assets/color.jpg'
import img2 from '../assets/normal.png'
import img3 from '../assets/occlusion.jpg'

export default function Earth() {

    const scene = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start end', 'end start']
    })

    /* Used for smooth rotation if you're not using Lenis Scroll */
    // const smoothRotation = useSpring(scrollYProgress, {
    // damping: 20
    // });

    const [color, normal, aoMap] = useLoader(TextureLoader, [
        img1,
        img2,
        img3
    ])

    return (
        <Canvas ref={scene}>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={3.5} position={[1, 0, -.25]} />
            <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
            </motion.mesh>
        </Canvas>
    )
}