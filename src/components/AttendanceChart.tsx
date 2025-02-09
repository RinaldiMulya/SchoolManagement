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
        <div className='bg-white rounded-xl w-full h-full p-4 shadow-lg'>
            <div className='flex justify-between items-center'>
                {/* TITTLE */}
                <h1 className='text-lg font-semibold text-dark-gold'>Attendance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            {/* Bar Chart */}
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={25}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                    <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <Tooltip
                        cursor={{ fill: 'lightgrey' }}
                        labelStyle={{ color: '#000', fontWeight: 'bold' }}
                        contentStyle=
                        {
                            {
                                backgroundColor: '#fff',
                                border: 'none',
                                borderRadius: '10px',
                                padding: '10px',
                                borderColor: 'lightgrey'
                            }
                        }
                    />
                    <Legend
                        align='left'
                        verticalAlign='top'
                        wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
                    />
                    <Bar
                        dataKey="present"
                        fill="#EFB036"
                        activeBar={<Rectangle fill="pink" stroke="blue" />}
                        legendType="circle"
                        radius={[20, 20, 0, 0]}
                    />
                    <Bar
                        dataKey="absent"
                        fill="#3B6790"
                        activeBar={<Rectangle fill="gold" stroke="purple" />}
                        legendType="circle"
                        radius={[20, 20, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart