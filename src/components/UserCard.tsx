import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
  return (
    <div className="rounded-2xl odd:bg-maroon even:bg-navy p-4 flex-1 min-w-[130px] text-gray-200">
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-dark-maroon">2025/01</span>
        <Image 
            src="/more.png"
            width={20}
            height={20}
            alt=""/>
      </div>
      <h1 className="text-2xl font-semibold my-4">1.1234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-100">{type}</h2>
    </div>
  )
}

export default UserCard 