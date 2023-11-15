import React, { useContext, useRef } from 'react'
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';
import MouseContext from '../utils/mouseContext';

export default function Titles({ data, setSelectedProject }) {
    return (
        <div className='w-full ' style={{
            borderTop: '1px solid rgba(183, 171, 152, 0.25)'
        }}>
            {
                data.map((project, i) => {
                    return <Title key={i} data={{ ...project, i }} setSelectedProject={setSelectedProject} />
                })
            }
        </div>
    )
}

function Title({ data, setSelectedProject }) {

    const { title, speed, i } = data;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${25 / speed}vw end`]
    })

    const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;
    const mouse = useContext(MouseContext)

    return (
        <div ref={container} style={{
            borderBottom: '1px solid rgba(183, 171, 152, 0.25)',
        }} className='relative z-[2]'>
            <div
                className='inline-block pl-[10%]'
                onMouseOver={() => {
                    setSelectedProject(i)
                    mouse.setSize(0)
                }}
                onMouseLeave={() => {
                    setSelectedProject(null)
                    mouse.setSize(40)
                }}
            >
                <motion.p style={{ clipPath: clip }} className='inline-block text-[#b7ab98] uppercase text-[8vw] font-bold leading-[7.5vw] m-0 relative z-[2]'>
                    {title}
                </motion.p>
                {/* <p className='block absolute top-0 z-[1] text-[#1c1c1c]'>
                    {title}
                </p> */}
            </div>
        </div>
    )
}