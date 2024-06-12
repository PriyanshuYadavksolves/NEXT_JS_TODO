'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

const EditTopicForm = ({id,title,description}) => {

  const router = useRouter()
  
  const [newTitle,setNewTitle] = useState(title)
  const [desc,setNewDesc] = useState(description)

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ROUTE}/api/topics/${id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json',
        },
        body:JSON.stringify({newTitle,newDescription:desc})
      })

      if(!res.ok){
        throw new Error('Failed to update topic')
      }
      router.push('/')
      router.refresh()
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
    <input onChange={(e)=>setNewTitle(e.target.value)} value={newTitle}
     className='border border-slate-700 px-8 py-2' type="text" placeholder='Title' />

    <input
    onChange={(e)=>setNewDesc(e.target.value)} value={desc}
    className='border border-slate-700 px-8 py-2' type="text" placeholder='Topic Description' />

    <button type="submit" className='bg-green-600 font-bold text-white py-3 w-fit px-6'>Update topic</button>
</form>
  )
}

export default EditTopicForm
