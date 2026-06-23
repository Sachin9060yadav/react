import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    console.log(props.users)
    return (
        <div className='h-full w-3/4 p-4 flex flex-nowrap gap-5 overflow-x-auto '>
            {props.users.map(function(elem,index){
                return <RightCard img={elem.img} tag={elem.tag} key={index} id={index}/>
            })}


        </div>
    )
}

export default RightContent