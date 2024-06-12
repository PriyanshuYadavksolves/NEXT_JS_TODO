import EditTopicForm from '@/components/EditTopicForm'

const fetchTopicDetails = async(id)=>{
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ROUTE}/api/topics/${id}`,{
      cache:'no-store'
    })

    if(!res.ok){
      throw new Error('Failed to fetch topic')
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const page = async({params}) => {
  const {id} = params
  const {topic} = await fetchTopicDetails(id)
  const {title,description} = topic
  return (
    <EditTopicForm id={id} title={title} description={description}/>
  )
}

export default page
