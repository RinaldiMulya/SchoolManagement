import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"

const ParentPage = () => {
    return (
        <div className="h-screen py-4 flex gap-4 flex-col xl:flex-row">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                <div className="h-full bg-background-primary p-4 rounded-xl">
                    <h1 className="text-xl font-semibold ">Schedule (Sung Jinwo)</h1>
                    <BigCalendar />
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                <Announcements />
            </div>
        </div>
    )
}

export default ParentPage