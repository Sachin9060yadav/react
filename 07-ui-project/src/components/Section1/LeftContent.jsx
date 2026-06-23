import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Hero from './Hero'
import Arrow from './Arrow'

const LeftContent = () => {
    return (
        <div className='h-full w-1/4 flex flex-col justify-between  '>
           
            <Hero />
            <Arrow />

        </div>
    )
}
export default LeftContent