import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../utils/useMousePosition';
import MouseContext from '../utils/mouseContext';

const About = () => {

    const mouse = useContext(MouseContext)

    return (
        <section className='h-[80vh] relative' >
            {/* <motion.div
                className='mask w-full h-[60vh] flex items-center justify-center text-[#afa18f] text-[4rem] leading-[66px]'
                animate={{
                    WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            >
                <p className='w-[1000px] p-10' onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
                    A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
                </p>
            </motion.div> */}

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center text-[#afa18f] text-[4rem] leading-[66px] z-10 mix-blend-difference'>
                <p onMouseEnter={() => mouse.setSize(400)} onMouseLeave={() => mouse.setSize(40)} className='w-[1000px] p-10'>I'm a <span className='text-[#ec4e39]'>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
            </div>

        </section>
    )
}

export default About