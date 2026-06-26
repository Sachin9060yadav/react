import React, { useState } from 'react'

const App = () => {

  // let a = 20;

  // function changeA(){
  //   console.log(a)
  //   a++
  //   console.log(a)
  // }

  //////////////////////////////////////////////////////////////
  // const [num, setNum] = useState(10)
  // const [userName, setuserName] = useState("sachin")
  // function changeNum(){
  //   setNum(20)
  //   setuserName("suraj")
  // }

  /////////////////////////////////////
  const [num, setNum] = useState(0)
  function increaseNum(){
setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)

  }
  function jump5Num(){
    setNum(num+5)

  }


  return (
    // <div>
    //   <h1>value of a is {a}</h1>
    //   <button onClick={changeA}>Click</button>
    // </div>

/////////////////////////////////////////////////////
    // <div>
    //   <h1>value of num is {num} <br /> value of user is {userName}</h1>
    //   <button onClick={changeNum}>Click</button>
    // </div>

    ///////////////////////////////////////////////////////
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decreade</button>
      <button onClick={jump5Num}>jump by 5</button>
    </div>
  )
}

export default App