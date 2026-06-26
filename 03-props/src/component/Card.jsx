import React from 'react'

const Card = (props) => {
   console.log(props);
  return (
    <div className='card'>
        <img src={props.img} alt='' />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nemo hic adipisci magni officiis dolores omnis nisi ea saepe, error necessitatibus explicabo repellendus non corporis molestiae dolore eius sit perspiciatis.</p>
        <button>view profile</button>

      </div>
  )
}

export default Card