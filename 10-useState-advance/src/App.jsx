
import React, { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState({ user: "sachin", age: 20 })

  // function btnClicked() {

  //   const newNum = { ...num }
  //   newNum.user= "suraj"
  //   newNum.age=22
  //   setNum(newNum)
  // }

  //////////////////////////////
  // const [num, setNum] = useState([10, 20, 30, 40])
  // const btnClicked = () => {
  //   const newNum = [...num]
  //   newNum.push(99)
  //   setNum(newNum)
  // }

  ///////////////////////////  Batch management /////////////////////////
  const [num, setNum] = useState(10)
  const btnClicked = () => {
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))

  }

  return (
    // <div>
    //   <h1>{num.user}, {num.age}</h1>
    //   <button onClick={btnClicked}>click</button>
    // </div>

    ///////////////////////////////////
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App