'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
//use to add the task
  const submitHandler = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    setdesc("")
    settitle("")
    console.log(mainTask)
  }
  //use to del the task
  const deleteHandler = (i) =>{
    let tempTask = [...mainTask]
    tempTask.splice(i,1)
    setmainTask(tempTask)
  }

  let renderTask= <h2>No Task Available</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map((task,index)=>{
      return (
        <li key={index} className='p-2 border-2 px-4 py-2 m-5 border-zinc-800 text-2xl text-center'>
          <div>
          <h3 className='font-bold'>{task.title}</h3>
          <p>{task.desc}</p>
          </div>
          
          <button
          onClick={()=>{
            deleteHandler(index)
          }}
           className='bg-red-500  rounded text-white'>Delete</button>
        </li>
      )
    })
  }
  return (
   <>
   <h1 className='bg-black text-white p-5 text-5xl text-center font-bold' >Aayush's Todo List</h1>

   <form onSubmit={submitHandler}>
    <input type="text" placeholder='Enter your title' 
    className='p-2 border-2 px-4 py-2 m-5 border-zinc-800 text-2xl text-center'
    value={title}
    onChange={(e)=>{
      settitle(e.target.value)
    }}></input>

    <input type="text" placeholder='Enter Description here' 
    className='p-2 border-2 px-4 py-2 m-5 border-zinc-800 text-2xl text-center'
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value)
    }}></input>

    <button 
    className='p-2 border-2 px-4 py-2 m-5 border-zinc-800 text-2xl bg-black
     text-white font-bold rounded'>Add Task</button>
   </form>
   <hr />
   <div className='p-8 bg-slate-200'>
    <ul>
      {renderTask}
    </ul>
   </div>
   </>
  )
}

export default page