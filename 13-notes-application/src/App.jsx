import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")

  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({ title, details })

    setTask(copyTask)
    console.log(task)


    setTitle('')
    setDetails('')


  }
  const deleteNotes = (idx) => {
    const copyTask = [...task]

    copyTask.splice(idx, 1)
    setTask(copyTask)
  }
  return (
    <div className='bg-black h-screen text-white lg:flex'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex lg:w-1/2 p-10 items-start flex-col gap-4'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* phela wala input for heading */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 font-medium py-2 rounded border-2 w-full outline-none'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* details wala value */}
        <textarea
          type="text"
          placeholder='writes Details'
          className='px-5 font-medium  h-32 py-2  w-full flex items-start flex-row border-2 outline-none rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button className='bg-white active:scale-95 text-black font-medium px-5 py-2 rounded w-full outline-none '>Add Notes</button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10 '>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start mt-5 h-[90vh] overflow-auto gap-4'>
          {task.map(function (elem, idx) {

            return <div key={idx} className='flex flex-col justify-between items-start relative h-60 w-40 rounded-xl   text-black py-15 px-8   bg-cover bg-center bg-[url("https://i.pinimg.com/originals/89/b5/cf/89b5cfb753977226a537ec36c133dffa.png")]'>
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-3 leading-tight font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNotes(idx)
              }} className='w-full bg-red-400 text-white text-sm rounded font-bold cursor-pointer active:scale-95'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App