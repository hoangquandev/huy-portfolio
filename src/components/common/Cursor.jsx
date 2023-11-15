
import React, { useContext, useEffect, useRef } from 'react'
import useMousePosition from '../../utils/useMousePosition';
import MouseContext from '../../utils/mouseContext';
import gsap from 'gsap';

const Cursor = () => {

    const { x, y } = useMousePosition();
    const mouse = useContext(MouseContext)
    const cursor = useRef(null)
    useEffect(() => {
        gsap.to(cursor.current, {
            left: x - (mouse.size / 2),
            top: y - (mouse.size / 2),
            width: mouse.size,
            height: mouse.size,
            duration: 0.5,
            ease: "backOut"
        })

        // window.addEventListener('mouseleave', (e) => {
        //     {
        //         xMove(0)
        //         yMove(0)
        //     }
        // })
    }, [x, y, mouse.hover])
    // console.log(mouse.hover);
    return (
        <div ref={cursor} className='fixed bg-[#ec4e39] rounded-full top-0 left-0 z-0 w-10 h-10'
        ></div>
    )
}

export default Cursor