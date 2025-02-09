import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
  return (
    <div className="rounded-2xl odd:bg-secondary even:bg-primary p-4 flex-1 min-w-[130px] text-text-disabled">
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-background-primary px-2 py-1 rounded-full text-accent">2025/01</span>
        <Image 
            src="/more.png"
            width={20}
            height={20}
            alt=""/>
      </div>
      <h1 className="text-2xl font-semibold my-4">1.1234</h1>
      <h2 className="capitalize text-sm font-medium text-text-disabled">{type}</h2>
    </div>
  )
}

export default UserCard 