import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import Magnetic from './common/Magnetic'

const Header = () => {
    return (
        <div className='fixed top-0 left-0 w-full z-50 mix-blend-difference'>
            <div className='flex justify-between items-center px-16 py-10'>
                <Magnetic>
                    <Logo />
                </Magnetic>
                <Nav />
            </div>
        </div>
    )
}

export default Header