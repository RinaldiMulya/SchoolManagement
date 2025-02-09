"use client"

import Image from "next/image"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        Income: 4000,
        Expanse: 2400,
        Debt: 2400,
    },
    {
        name: 'Feb',
        Income: 3000,
        Expanse: 1398,
        Debt: 2210,
    },
    {
        name: 'Mar',
        Income: 2000,
        Expanse: 9800,
        Debt: 2290,
    },
    {
        name: 'Apr',
        Income: 2780,
        Expanse: 3908,
        Debt: 2000,
    },
    {
        name: 'Mei',
        Income: 1890,
        Expanse: 4800,
        Debt: 2181,
    },
    {
        name: 'Jun',
        Income: 2390,
        Expanse: 3800,
        Debt: 2500,
    },
    {
        name: 'Jul',
        Income: 3490,
        Expanse: 4300,
        Debt: 2100,
    },
    {
        name: 'Agu',
        Income: 1890,
        Expanse: 4800,
        Debt: 2181,
    },
    {
        name: 'Sep',
        Income: 2390,
        Expanse: 3800,
        Debt: 2500,
    },
    {
        name: 'Okt',
        Income: 3490,
        Expanse: 4300,
        Debt: 2100,
    },
    {
        name: 'Nov',
        Income: 2390,
        Expanse: 3800,
        Debt: 2500,
    },
    {
        name: 'Des',
        Income: 3490,
        Expanse: 4300,
        Debt: 2100,
    },
];

const FinanceChart = () => {
    return (
        <div className='bg-white p-4 rounded-xl w-full h-full shadow-lg'>
            {/* TITTLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Finance </h1>
                <Image src='/moreDark.png' alt='student' width={20} height={20} />
            </div>
            {/* Line Chart */}
            <div className="chart-container" style={{ width: '100%', height: '400px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="Income" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="Expanse" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="Debt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default FinanceChart