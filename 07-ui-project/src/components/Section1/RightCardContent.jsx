import React from 'react'

const RightCardContent = (props) => {
  return (
      <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
                <h2 className='bg-white  h-8 w-8 rounded-full justify-center items-center flex text-xl font-bold'>{props.id+1}</h2>

                <div>
                    <p className='text-shadow-2xs  leading-normal text-white mb-5 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam asperiores alias quod, eveniet iusto quo?</p>


                    <div className= ' flex justify-between'>
                        <button className='bg-blue-500 text-white font-medium px-4 py-1 rounded-full'>{props.tag}</button>
                        <button className='bg-blue-500 text-white font-medium px-2 py-1 rounded-full'><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
  )
}

export default RightCardContent