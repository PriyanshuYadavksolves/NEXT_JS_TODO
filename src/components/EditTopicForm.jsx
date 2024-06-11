import { revalidatePath } from "next/cache"
import Topic from "../../models/topics"
import { redirect } from 'next/navigation'
import connectMongoDB from "../../libs/mongodb"

const EditTopicForm = ({id,title,description}) => {

  const handleSubmit = async(formdata) => {
    'use server'

    const title = formdata.get('title')
    const description = formdata.get('description')

    if (!title || !description) {
      return
    }
    
    try {
      await connectMongoDB()
      await Topic.findByIdAndUpdate(id,{title,description})
    } catch (error) {
      console.log("error =", error)
    }
    revalidatePath('/')
    redirect('/')
  }


  return (
    <form action={handleSubmit} className='flex flex-col gap-3'>
    <input placeholder={title} name="title"
     className='border border-slate-700 px-8 py-2' type="text" />

    <input name="description"
    placeholder={description}
    className='border border-slate-700 px-8 py-2' type="text"  />

    <button type="submit" className='bg-green-600 font-bold text-white py-3 w-fit px-6'>Update topic</button>
</form>
  )
}

export default EditTopicForm
