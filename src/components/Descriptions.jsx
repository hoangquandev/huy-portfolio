import React from 'react'

export default function Descriptions({ data, selectedProject }) {

    const crop = (string, maxLength) => {
        return string.substring(0, maxLength);
    }
    // console.log(selectedProject);
    return (
        <div className='absolute top-[3px] h-full w-full z-[1]'>
            {
                data.map((project, i) => {
                    const { title, description } = project;
                    return (
                        <div
                            key={i}
                            className='bg-[#ec4e39] flex justify-between items-center px-[10%]'
                            style={{ clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%", transition: 'clip-path .4s' }}
                        >
                            <p
                                style={{

                                    color: '#010101',
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                    fontSize: '8vw',
                                    lineHeight: '7.5vw',
                                    margin: '0px',
                                    position: 'relative',
                                    zIndex: 1,

                                }}
                            >{crop(title, 9)}</p>
                            <p
                                style={{
                                    width: '40%',
                                    fontSize: '1vw',
                                    fontWeight: 700,
                                }}
                            >{description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}