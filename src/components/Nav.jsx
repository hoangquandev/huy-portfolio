import React, { useState } from 'react'
import TextSlide from './common/TextSlide'
import Text from './common/Text'

const routes = [
    {
        page: 'about'
    },
    {
        page: 'work'
    },
    {
        page: 'contact'
    },
]
const Nav = () => {
    const [currentSection, setSection] = useState('about')
    return (
        <nav>
            <ul className='text-right uppercase font-bold text-[1rem] leading-4 w-28'>
                {
                    routes.map((item, index) => {

                        return (
                            <li key={index} onClick={() => setSection(item.page)} className='py-[0.375rem]'>
                                <TextSlide currentSection={currentSection} text={item.page} />
                            </li>
                        )
                    })
                }
                <li>
                    <Text text='hello' />
                </li>
            </ul>
        </nav>
    )
}

export default Nav