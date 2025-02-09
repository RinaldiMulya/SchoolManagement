"use client"

import Image from "next/image";
import React from "react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const data = [
    {
        name: "2020",
        Income: 4000,
        Debt: -2400,
    },
    {
        name: "2021",
        Income: 3000,
        Debt: -1398,
    },
    {
        name: "2022",
        Income: 1000,
        Debt: -6800,
    },
    {
        name: "2023",
        Income: 500,
        Debt: -3908,
    },
    {
        name: "2024",
        Income: 5000,
        Debt: -4800,
    },
    {
        name: "2025",
        Income: 2500,
        Debt: -3800,
    },
];

// Function to calculate gradient offset
const gradientOffset = (key: "Income" | "Debt") => {
    const values = data.map((item) => item[key]);
    const dataMax = Math.max(...values);
    const dataMin = Math.min(...values);

    if (dataMax <= 0) return 0;
    if (dataMin >= 0) return 1;

    return dataMax / (dataMax - dataMin);
};

const offsetIncome = gradientOffset("Income");
const offsetDebt = gradientOffset("Debt");

const Debt = () => {
    return (
        <div className='bg-white p-4 rounded-xl w-full h-full shadow-lg'>
            {/* TITTLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Year's Finance</h1>
                <Image src='/moreDark.png' alt='student' width={20} height={20} />
            </div>
            {/* Line Chart */}
            <div className="chart-container" style={{ width: '100%', height: '400px' }}>
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            {/* Gradient for Income */}
                            <linearGradient id="uvGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset={offsetIncome} stopColor="green" stopOpacity={1} />
                                <stop offset={offsetIncome} stopColor="red" stopOpacity={1} />
                            </linearGradient>
                            {/* Gradient for Debt */}
                            <linearGradient id="pvGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset={offsetDebt} stopColor="blue" stopOpacity={1} />
                                <stop offset={offsetDebt} stopColor="red" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        {/* Area for Income with green-red gradient */}
                        <Area
                            type="monotone"
                            dataKey="Income"
                            stroke="black"
                            fill="url(#uvGradient)"
                        />
                        {/* Area for Debt with blue-purple gradient */}
                        <Area
                            type="monotone"
                            dataKey="Debt"
                            stroke="darkblue"
                            fill="url(#pvGradient)"
                            fillOpacity={0.7}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Debt;