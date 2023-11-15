import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const Text = ({ text }) => {
    const topText = useRef(null)
    const bottomText = useRef(null)
    const [off, setOff] = useState(false)
    //gsap : tween , timeline
    // console.log(on);
    const click = () => {
        const tl = gsap.timeline()
        if (!off) {
            tl.to(topText.current, {
                top: '-100%',
                scale: 0,
                duration: 0.2
            })
                .to(bottomText.current, {
                    top: '0%',
                    scale: 1,
                    duration: 0.2
                })
                .to(topText.current, {
                    top: '100%',
                    // delay: 0.2,
                    duration: 0.2,
                    onComplete: () => setOff(true)
                })
        } else {
            tl.to(bottomText.current, {
                top: '-100%',
                scale: 0,
                duration: 0.2
            })
                .to(topText.current, {
                    top: '0%',
                    scale: 1,
                    duration: 0.2
                })
                .to(bottomText.current, {
                    top: '100%',
                    // delay: 0.2,
                    duration: 0.2,
                    onComplete: () => setOff(false)
                })
        }
    }

    return (
        <div
            // onMouseMove={handleMouseMove}
            // onMouseLeave={handleMouseLeave}
            onClick={click}
            className='relative h-4 overflow-hidden'>
            <span ref={topText}
                className='absolute right-0 top-0 transition-all duration-500 text-[#B8AC9980]'>on</span>
            <span ref={bottomText}
                className='absolute right-0 top-full transition-all duration-500 text-[#B7AB98]'>off</span>
        </div>
    )
}

export default Text