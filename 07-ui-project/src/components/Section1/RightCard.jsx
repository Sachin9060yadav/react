import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
   
    return (
        <div className='h-full w-60 bg-red-500 rounded-3xl overflow-hidden relative shrink-0'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
          <RightCardContent id={props.id} tag={props.tag}/>
        </div>
    )
}
export default RightCard
