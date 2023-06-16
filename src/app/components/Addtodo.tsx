"use client"
import { NewTodo } from '@/lib/drizzle'
import React, { useState } from 'react'




const Addtodo = () => {
    
    const [task,setTask] = useState<NewTodo>({
        task:"",
    })

    const handlesub = async ()=>{
        try {
            
       
    if (task.task){
        const res = await fetch("/api/todo",{
            method:"POST",
            body: JSON.stringify({
                task:task.task
            })
        })
    }
} catch (error) {
            console.log(error)
}
}

  return (
    <div>
        <form className='w-full mt-5 flex items-center'>
        <input
        onChange={(e)=>setTask({task: e.target.value})}
        className='rounded-full w-full py-3 px-2 border focus:outline-orange-700 ' type="text" />
        <button onClick={handlesub} className=' bg-pink-700 rounded-md py-2 px-4 mx-2   justify-center items-center font-bold text-white '>
    submit        </button>
        </form>

      
    </div>
    
  )
}

export default Addtodo