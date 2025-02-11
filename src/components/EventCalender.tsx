"use client"

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary Data   I will fetch this data from the server later
const eventsData = [
    {
        id: 1,
        title: "Lake Trip",
        class: "1A",
        describe: "This is a trip to the lake",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00",
    },
    {
        id: 2,
        title: "Picnic",
        class: "2A",
        describe: "This is a picnic",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00",
    },
    {
        id: 3,
        title: "Beach Trip",
        class: "3A",
        describe: "This is a trip to the beach",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00",
    },
    // {
    //     id: 4,
    //     title: "Museum Trip",
    //     class: "4A",
    //     describe: "This is a trip to the museum",
    //     date: "2025-01-01",
    //     startTime: "10:00",
    //     endTime: "11:00",
    // },
    // {
    //     id: 5,
    //     title: "Music Concert",
    //     class: "5A",
    //     describe: "This is a music concert",
    //     date: "2025-01-01",
    //     startTime: "10:00",
    //     endTime: "11:00",
    // },
];

const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='bg-white p-4 rounded-xl shadow-md'>
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src="/moreDark.png" alt="more" width={20} height={20} />
            </div>
            <div className="flex flex-col gap-4">
                {eventsData.map((event) => (
                    <div
                        className="flex justify-between gap-4 p-5 rounded-lg shadow-md text-text-secondary border-t-8 odd:border-t-primary-light even:border-t-secondary-light"
                        key={event.id}
                    >
                        <div>
                            <h1 className="font-semibold">{event.title}</h1>
                            <h2 className="text-xs">{event.class}</h2>
                            <h3 className="text-sm">{event.describe}</h3>
                        </div>
                        <div className="flex flex-col items-end pt-1">
                            <h1 className="font-semibold">{event.date}</h1>
                            <h1 className="">{event.startTime} - {event.endTime}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalender