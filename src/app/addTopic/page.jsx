'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

const AddTopic = () => {
  const [title,setTitle] = useState("")
  const [description,setDescription] 
  =useState("")
  const router = useRouter()

  const handleSubmit = async(e) =>{
    e.preventDefault()
    if(!title || !description){
      alert('title and description is needed')
      return
    }

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_REST_API_ROUTE,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
    
      body:JSON.stringify({title,description})
    })

    if(res.ok){
      router.push('/')
      router.refresh()
    }else{
      throw new Error('Failed to create a Topic')
    }

    } catch (error) {
      console.log(error)
    }
  }



  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input 
        onChange={(e)=>setTitle(e.target.value)} value={title}
        className='border border-slate-700 px-8 py-2' 
        type="text" placeholder='Title' />

        <input 
         onChange={(e)=>setDescription(e.target.value)} value={description}
        className='border border-slate-700 px-8 py-2' type="text" placeholder='Topic Description' />

        <button type="submit" className='bg-green-600 font-bold text-white py-3 w-fit px-6'>Add topic</button>
    </form>
  )
}

export default AddTopic
