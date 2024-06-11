import { redirect } from 'next/navigation'
import connectMongoDB from '../../../libs/mongodb'
import Topic from '../../../models/topics'
import { revalidatePath } from 'next/cache'

const AddTopic = () => {

  const handleSubmit = async(formdata) => {
    'use server'

    const title = formdata.get('title')
    const description = formdata.get('description')

    if (!title || !description) {
      return
    }
    
    try {
      await connectMongoDB()
      await Topic.create({ title, description }) 
    } catch (error) {
      console.log("error =", error)
    }
    revalidatePath('/')
    redirect('/')
  }

  return (
    <form action={handleSubmit} className='flex flex-col gap-3'>
      <input name="title"
        className='border border-slate-700 px-8 py-2' 
        type="text" placeholder='Title' required/>
      <input name="description"
        className='border border-slate-700 px-8 py-2'
        type="text" placeholder='Topic Description' required/>
      <button type="submit"
        className='bg-green-600 font-bold text-white py-3 w-fit px-6'>
        Add topic
      </button>
    </form>
  )
}

export default AddTopic
