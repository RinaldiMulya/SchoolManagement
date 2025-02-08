"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const CountChart = () => {
    const [tooltipContent, setTooltipContent] = useState<string | null>(null);

    const data = [
        {
            name: 'Totals',
            count: 106,
            fill: 'white',
        },
        {
            name: 'Girls',
            count: 55,
            fill: '#EFB036',
        },
        {
            name: 'Boys',
            count: 45,
            fill: '#3B6790',
        }
    ];

    return (
        <div className='bg-white p-4 rounded-xl w-full h-full shadow-md'>
            {/* TITTLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Students</h1>
                <Image src='/moreDark.png' alt='student' width={20} height={20} />
            </div>
            {/* CHART RADIAL */}
            <div className='relative w-full h-[75%]'>
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="90%" barSize={32} data={data}>
                        <RadialBar
                            label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image 
                    src="/maleFemale.png"
                    alt=''
                    width={50}
                    height={50}
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
            </div>
            {/* BOTTOM */}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-maroon rounded-full' />
                    <h1 className='font-bold '>1.12345</h1>
                    <h2 className='font-bold text-xs text-gray-500'>Boys (50%)</h2>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-navy rounded-full' />
                    <h1 className='font-bold '>1.12345</h1>
                    <h2 className='font-bold text-xs text-gray-500'>Girls (50%)</h2>
                </div>
            </div>
        </div>
    );
};
export default CountChart;