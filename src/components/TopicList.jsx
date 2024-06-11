import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi'

const getTopics = async()=>{
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_REST_API_ROUTE,{cache:'no-store'})
    if(!res.ok){
      throw new Error('error')
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}


const TopicList = async() => {

  // const {topics} = await getTopics()
  // console.log(process.env.NEXT_PUBLIC_REST_API_ROUTE)

  return (
    <>
    {/* {topics.map(t=>(

    <div key={t._id} className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-center'>
        <div >
            <h2 className='font-bold text-2xl'>{t.title}</h2>
            <div>{t.description}</div>
        </div>
        
        <div className='flex gap-2'>
            <RemoveBtn id={t._id}/>
            <Link href={`editTopic/${t._id}`}>
                <HiPencilAlt size={24}/>
            </Link>
        </div>
    </div>
        ))} */}
        hello world

    
    </>
  )
}

export default TopicList
