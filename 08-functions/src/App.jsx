import React from 'react'

const App = () => {
  // function btnClicked(){
  // console.log("btn was clicked")
  // }
  // function mouseEnter() {
  //   console.log("mouse enter")
  // }


  // function inputChanging() {
  //   console.log("user is typing")
  // }

  const pageScrolling = (elem)=>{
    if(elem>0){
      console.log("scrolling sidha")
    }else{
      console.log("scrolling ulta")
    }
  }



  return (
    // <div>
    //   <button onMouseEnter={mouseEnter} onClick={btnClicked}>Clicked here</button>
    //    <button onClick={btnClicked}>Clicked here</button>
    //    <button onClick={btnClicked}>Explore</button>
    // </div>
    // <div>
    //   <button onClick={function(){
    //     console.log("hello guys")
    //   }}>click here</button>

    // </div> 

    //........................................... directly call kiye ...................................//
    // <div>
    //   <button onClick={()=> {
    //     console.log("hello guys")
    //   }}> clicked here </button> 
    // </div>



    // <div>
    //   <input
    //     onChange={function (elem) {
    //       console.log(elem.target.value)
    //     }} type="text"
    //     placeholder="Enter name"
    //   />
    // </div >


    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY)
    }}>
      <div className='page1'>page1</div>
      <div className='page2'>page2</div>
    </div>

  )
}
export default App