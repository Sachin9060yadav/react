import React from 'react'
import App from '../src/App'
const Cards = ()=>{
    return (
        <div className='card'>
            <div className='top'>
                <div>
                  
                    <h3>Hubstaff Directory</h3>
                    <h6>HOW IT WORKS</h6>
                    <h6>BROWSE</h6>
                    <h6>SEARCH</h6>
                    <h6>START A PROFILE</h6>
                    <h6>ADD YOUR AGENCY</h6>
                </div>
              

            </div>
            <div className='bottom'>
                <h1>PROFILES</h1>
                <div className='profile-tag'>
                    <button>available</button>
                    <h2>$55/hr</h2>
                </div>
                <div className='profile-img'>
                    <img src="https://i.pinimg.com/originals/13/88/d0/1388d0ec7d94e780404aa1ac823398eb.jpg" alt="" />
                    <h1>Wade wilson</h1>
                    <p>UI/Ux designer</p>
                </div>
                <div className='designer'>
                    <button>UI</button>
                    <button>UX</button>
                    <button>photoshop</button>
                    <button>+4</button>
                </div>
                <p>wade is 32 years old UI/UX designer withan impressive profile behind him</p>
                <button>VIEW PROFILE</button>
            </div>
            <div className='bottom'>
            </div>
        </div>
    )
}
export default Cards