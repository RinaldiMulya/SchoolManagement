"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        present: 90,
        absent: 10,
    },
    {
        name: 'Tue',
        present: 60,
        absent: 40,
    },
    {
        name: 'Wed',
        present: 80,
        absent: 20,
    },
    {
        name: 'Thu',
        present: 40,
        absent: 60,
    },
    {
        name: 'Fri',
        present: 100,
        absent: 0,
    },
];


const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            <div className=''>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={30}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="present" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} legendType="circle" />
                    <Bar dataKey="absent" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} legendType="circle"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart