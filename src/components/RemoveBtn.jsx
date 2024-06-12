'use client'
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
const RemoveBtn = ({id}) => {

  const router = useRouter()

  const removeTopic = async()=>{
    const confirmed = confirm("are you sure?")
    if(confirmed){
      const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ROUTE}/api/topics?id=${id}`,{
        method:'DELETE'
      })
      if(res.ok){
        router.refresh()
      }
    }
  }
  return (
    <button className="text-red-400">
      <HiOutlineTrash size={24} onClick={removeTopic} />
    </button>
  );
};

export default RemoveBtn;
