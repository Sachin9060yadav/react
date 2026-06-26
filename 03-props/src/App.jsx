import React from 'react'
import Card from './component/Card'

const App = () => {
  return (
    <div className='parent'>
        
      <Card user="Suraj"  age={20} img="https://plus.unsplash.com/premium_photo-1779751087423-5f6ddd767103?q=80&w=771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
      <Card user="Rohit"  age={21} img="https://images.unsplash.com/photo-1775641487797-ee362ba3b600?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Sachin"  age={21} img="https://plus.unsplash.com/premium_photo-1774271481336-845c3a07f690?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App