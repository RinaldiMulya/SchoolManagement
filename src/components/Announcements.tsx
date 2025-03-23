"use client"
import { announcementsData } from "@/lib/data"
const Announcements = () => {
    return (
        <div className="bg-background-primary p-4 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-xs text-text-secondary cursor-pointer"><a>View All</a></span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                {announcementsData.map((announcement, index) => (
                    <div
                        className={`flex flex-col gap-1 p-4 rounded-lg shadow-md text-text-primary 
                    ${index % 3 === 0 ? "bg-primary-light/45" : index % 3 === 1 ? "bg-secondary-light/45" : "bg-accent/45"}`}
                        key={announcement.id}
                    >
                        <div className="flex justify-between gap-4 items-center">
                            <h1 className="font-semibold">{announcement.title}</h1>
                            <span className="text-xs text-text-secondary bg-background-primary rounded-md px-1 py-1">
                                {announcement.date}
                            </span>
                        </div>
                        <h2 className="text-xs text-text-primary text-wrap">{announcement.description}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Announcements