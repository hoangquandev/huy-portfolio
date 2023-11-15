import React from 'react'
import SocialNav from './SocialNav'
import SoundButton from './SoundButton'

const Footer = () => {
    return (
        <div className='fixed bottom-0 left-0 w-full'>
            <div className='flex justify-between items-center px-16 py-10'>
                <SocialNav />
                <SoundButton />
            </div>
        </div>
    )
}

export default Footer