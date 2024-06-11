import { HiOutlineTrash } from "react-icons/hi";
import connectMongoDB from "../../libs/mongodb";
import Topic from "../../models/topics";
import { revalidatePath } from "next/cache";
const RemoveBtn = ({id}) => {

  const removeTopic = async()=>{
    'use server'

      try {
        await connectMongoDB()
        await Topic.findByIdAndDelete(id)
      } catch (error) {
        console.log(error)
      }
      
    
    revalidatePath('/')
  }
  return (
    <form action={removeTopic}>
    <button className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
    </form>
  );
};

export default RemoveBtn;
