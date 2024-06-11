import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi'
import connectMongoDB from '../../libs/mongodb'
import Topic from '../../models/topics'

const TopicList = async() => {
  
  await connectMongoDB()
  let topics = await Topic.find({}).lean()
  topics = topics.map(topic => ({
    ...topic,
    _id: topic._id.toString(),
  }));
  
  return (
    <>
    {topics.map(t=>(

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
        ))}

    
    </>
  )
}

export default TopicList
